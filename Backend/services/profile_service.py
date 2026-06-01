from fastapi import HTTPException, status

from config.firebase import db

from schemas.profile_schemas import UpdateProfileRequest


async def get_profile(user_id: str) -> dict:
    doc = db.collection("users").document(user_id).get()

    if not doc.exists:
        raise HTTPException(status_code=404, detail="User not found")

    user = doc.to_dict()
    user.pop("password", None)

    return {"user": {"id": user_id, **user}}







async def update_profile(body: UpdateProfileRequest, user_id: str) -> dict:
    user_ref = db.collection("users").document(user_id)

    if not user_ref.get().exists:
        raise HTTPException(status_code=404, detail="User not found")

    update_data = {k: v for k, v in body.model_dump().items() if v is not None}

    if not update_data:
        raise HTTPException(status_code=400, detail="No data provided")

    user_ref.update(update_data)

    return {"message": "Profile updated successfully"}



async def delete_account(user_id: str) -> dict:
    user_ref = db.collection("users").document(user_id)

    if not user_ref.get().exists:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    user_ref.delete()

    return {"message": "Account deleted successfully"}


