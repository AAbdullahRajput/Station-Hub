from fastapi import HTTPException
from config.firebase import db
from models.station_model import StationModel
from schemas.station_schemas import StationRequest


async def get_all_stations() -> dict:
    docs = db.collection("stations").stream()
    stations = [{"id": doc.id, **doc.to_dict()} for doc in docs]
    return {"stations": stations}


async def get_station_by_id(station_id: str) -> dict:
    doc = db.collection("stations").document(station_id).get()

    if not doc.exists:
        raise HTTPException(status_code=404, detail="Station not found")

    return {"station": {"id": doc.id, **doc.to_dict()}}


async def search_stations(q: str) -> dict:
    docs = db.collection("stations").stream()
    q_lower = q.lower()

    results = []
    for doc in docs:
        data = doc.to_dict()
        if (
            q_lower in data.get("name", "").lower()
            or q_lower in data.get("city", "").lower()
            or q_lower in data.get("address", "").lower()
        ):
            results.append({"id": doc.id, **data})

    return {"stations": results}


async def add_station(body: StationRequest) -> dict:
    station = StationModel(
        name=body.name,
        city=body.city,
        address=body.address,
        latitude=body.latitude,
        longitude=body.longitude,
        image=body.image or "",
        amenities=body.amenities or [],
    )

    doc_ref = db.collection("stations").add(station.to_dict())
    return {"message": "Station added", "station_id": doc_ref[1].id}