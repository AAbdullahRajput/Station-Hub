from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional


@dataclass
class BookingModel:
    user_id: str
    station_id: str
    from_location: str
    to_location: str
    travel_date: str
    travel_time: str
    seat_count: int
    service_id: Optional[str] = ""
    status: str = "confirmed"
    created_at: str = field(default_factory=lambda: datetime.utcnow().isoformat())

    def to_dict(self) -> dict:
        return {
            "user_id": self.user_id,
            "station_id": self.station_id,
            "from_location": self.from_location,
            "to_location": self.to_location,
            "travel_date": self.travel_date,
            "travel_time": self.travel_time,
            "seat_count": self.seat_count,
            "service_id": self.service_id,
            "status": self.status,
            "created_at": self.created_at,
        }