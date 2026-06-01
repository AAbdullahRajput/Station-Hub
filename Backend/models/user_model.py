from dataclasses import dataclass, field
from datetime import datetime


@dataclass
class UserModel:
    full_name: str
    email: str
    password: str
    phone: str = ""
    profile_image: str = ""
    created_at: str = field(default_factory=lambda: datetime.utcnow().isoformat())

    def to_dict(self) -> dict:
        return {
            "full_name": self.full_name,
            "email": self.email,
            "password": self.password,
            "phone": self.phone,
            "profile_image": self.profile_image,
            "created_at": self.created_at,
        }
