from fastapi import APIRouter, Depends
from middleware.auth_middleware import get_current_user
from schemas.booking_schemas import BookingRequest
import services.booking_service as booking_service

router = APIRouter(prefix="/bookings", tags=["Bookings"])


@router.post("/")
async def create_booking(body: BookingRequest, current_user: dict = Depends(get_current_user)):
    return await booking_service.create_booking(body, current_user["sub"])


@router.get("/")
async def get_my_bookings(current_user: dict = Depends(get_current_user)):
    return await booking_service.get_my_bookings(current_user["sub"])


@router.get("/{booking_id}")
async def get_booking(booking_id: str, current_user: dict = Depends(get_current_user)):
    return await booking_service.get_booking_by_id(booking_id, current_user["sub"])


@router.delete("/{booking_id}")
async def cancel_booking(booking_id: str, current_user: dict = Depends(get_current_user)):
    return await booking_service.cancel_booking(booking_id, current_user["sub"])