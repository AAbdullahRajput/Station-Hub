from fastapi import APIRouter, Depends, Query
from middleware.auth_middleware import get_current_user
from schemas.station_schemas import StationRequest
import services.station_service as station_service

router = APIRouter(prefix="/stations", tags=["Stations"])


@router.get("/")
async def get_stations(current_user: dict = Depends(get_current_user)):
    return await station_service.get_all_stations()


@router.get("/search")
async def search_stations(q: str = Query(..., min_length=1), current_user: dict = Depends(get_current_user)):
    return await station_service.search_stations(q)


@router.get("/{station_id}")
async def get_station(station_id: str, current_user: dict = Depends(get_current_user)):
    return await station_service.get_station_by_id(station_id)


@router.post("/")
async def add_station(body: StationRequest, current_user: dict = Depends(get_current_user)):
    return await station_service.add_station(body)