from dataclasses import dataclass, field
from datetime import datetime
from typing import List, Optional


@dataclass
class StationModel:
    name: str
    city: str
    address: str
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    image: Optional[str] = ""
    amenities: List[str] = field(default_factory=list)
    created_at: str = field(default_factory=lambda: datetime.utcnow().isoformat())

    def to_dict(self) -> dict:
        return {
            "name": self.name,
            "city": self.city,
            "address": self.address,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "image": self.image,
            "amenities": self.amenities,
            "created_at": self.created_at,
        }