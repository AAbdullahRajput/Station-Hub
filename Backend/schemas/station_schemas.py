from pydantic import BaseModel
from typing import Optional, List


class StationRequest(BaseModel):
    name: str
    city: str
    address: str
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    image: Optional[str] = None
    amenities: Optional[List[str]] = []