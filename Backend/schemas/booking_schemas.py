from pydantic import BaseModel
from typing import Optional


class BookingRequest(BaseModel):
    station_id: str
    from_location: str
    to_location: str
    travel_date: str
    travel_time: str
    seat_count: int
    service_id: Optional[str] = None