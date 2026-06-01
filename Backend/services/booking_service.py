from fastapi import HTTPException
from config.firebase import db
from models.booking_model import BookingModel
from schemas.booking_schemas import BookingRequest


async def create_booking(body: BookingRequest, user_id: str) -> dict:
    station_doc = db.collection("stations").document(body.station_id).get()
    if not station_doc.exists:
        raise HTTPException(status_code=404, detail="Station not found")

    booking = BookingModel(
        user_id=user_id,
        station_id=body.station_id,
        from_location=body.from_location,
        to_location=body.to_location,
        travel_date=body.travel_date,
        travel_time=body.travel_time,
        seat_count=body.seat_count,
        service_id=body.service_id or "",
    )

    doc_ref = db.collection("bookings").add(booking.to_dict())
    booking_id = doc_ref[1].id

    return {
        "message": "Booking confirmed",
        "booking": {"id": booking_id, **booking.to_dict()},
    }


async def get_my_bookings(user_id: str) -> dict:
    docs = db.collection("bookings").where("user_id", "==", user_id).stream()

    bookings = []
    for doc in docs:
        data = doc.to_dict()
        station_doc = db.collection("stations").document(data["station_id"]).get()
        station_name = station_doc.to_dict().get("name", "") if station_doc.exists else ""
        bookings.append({"id": doc.id, "station_name": station_name, **data})

    bookings.sort(key=lambda x: x.get("created_at", ""), reverse=True)

    return {"bookings": bookings}


async def get_booking_by_id(booking_id: str, user_id: str) -> dict:
    doc = db.collection("bookings").document(booking_id).get()

    if not doc.exists:
        raise HTTPException(status_code=404, detail="Booking not found")

    booking = doc.to_dict()

    if booking["user_id"] != user_id:
        raise HTTPException(status_code=403, detail="Access denied")

    return {"booking": {"id": doc.id, **booking}}


async def cancel_booking(booking_id: str, user_id: str) -> dict:
    doc_ref = db.collection("bookings").document(booking_id)
    doc = doc_ref.get()

    if not doc.exists:
        raise HTTPException(status_code=404, detail="Booking not found")

    if doc.to_dict()["user_id"] != user_id:
        raise HTTPException(status_code=403, detail="Access denied")

    doc_ref.update({"status": "cancelled"})

    return {"message": "Booking cancelled"}