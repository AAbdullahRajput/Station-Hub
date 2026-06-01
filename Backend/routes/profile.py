from fastapi import APIRouter, Depends
from middleware.auth_middleware import get_current_user
from schemas.profile_schemas import UpdateProfileRequest
import services.profile_service as profile_service

router = APIRouter(prefix="/profile", tags=["Profile"])


@router.get("/")
async def get_profile(current_user: dict = Depends(get_current_user)):
    return await profile_service.get_profile(current_user["sub"])


@router.put("/")
async def update_profile(body: UpdateProfileRequest, current_user: dict = Depends(get_current_user)):
    return await profile_service.update_profile(body, current_user["sub"])


@router.delete("/")
async def delete_account(current_user: dict = Depends(get_current_user)):
    return await profile_service.delete_account(current_user["sub"])