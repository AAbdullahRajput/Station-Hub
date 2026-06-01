from pydantic import BaseModel
from typing import Optional


class MessageResponse(BaseModel):
    message: str


class UserResponse(BaseModel):
    id: str
    full_name: str
    email: str
    phone: Optional[str] = ""
    profile_image: Optional[str] = ""


class AuthResponse(BaseModel):
    message: str
    token: str
    user: UserResponse
