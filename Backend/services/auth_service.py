from fastapi import HTTPException, status
from datetime import datetime, timedelta

from config.firebase import db
from models.user_model import UserModel
from schemas.auth_schemas import (
    RegisterRequest,
    LoginRequest,
    ForgotPasswordRequest,
    VerifyOTPRequest,
    ResetPasswordRequest,
    ChangePasswordRequest,
)
from utils.jwt_handler import create_access_token
from utils.password_handler import hash_password, verify_password
from utils.email_handler import generate_otp, send_otp_email


# ─── Register ───────────────────────────────────────────────
async def register_user(body: RegisterRequest) -> dict:
    existing = db.collection("users").where("email", "==", body.email).limit(1).get()
    if existing:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")

    user = UserModel(
        full_name=body.full_name,
        email=body.email,
        password=hash_password(body.password),
        phone=body.phone or "",
    )

    doc_ref = db.collection("users").add(user.to_dict())
    user_id = doc_ref[1].id

    token = create_access_token({"sub": user_id, "email": body.email})

    return {
        "message": "Registration successful",
        "token": token,
        "user": {
            "id": user_id,
            "full_name": body.full_name,
            "email": body.email,
            "phone": body.phone or "",
            "profile_image": "",
        },
    }


# ─── Login ──────────────────────────────────────────────────
async def login_user(body: LoginRequest) -> dict:
    docs = db.collection("users").where("email", "==", body.email).limit(1).get()
    if not docs:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")

    user_doc = docs[0]
    user = user_doc.to_dict()

    if not verify_password(body.password, user["password"]):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")

    token = create_access_token({"sub": user_doc.id, "email": user["email"]})

    return {
        "message": "Login successful",
        "token": token,
        "user": {
            "id": user_doc.id,
            "full_name": user["full_name"],
            "email": user["email"],
            "phone": user.get("phone", ""),
            "profile_image": user.get("profile_image", ""),
        },
    }


# ─── Forgot Password ────────────────────────────────────────
async def forgot_password(body: ForgotPasswordRequest) -> dict:
    docs = db.collection("users").where("email", "==", body.email).limit(1).get()
    if not docs:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Email not found")

    otp = generate_otp()
    expiry = (datetime.utcnow() + timedelta(minutes=10)).isoformat()

    db.collection("otps").document(body.email).set({
        "otp": otp,
        "expires_at": expiry,
        "verified": False,
    })

    sent = send_otp_email(body.email, otp)
    if not sent:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to send OTP email")

    return {"message": "OTP sent to your email"}


# ─── Verify OTP ─────────────────────────────────────────────
async def verify_otp(body: VerifyOTPRequest) -> dict:
    otp_doc = db.collection("otps").document(body.email).get()
    if not otp_doc.exists:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="OTP not found")

    otp_data = otp_doc.to_dict()

    if datetime.utcnow().isoformat() > otp_data["expires_at"]:
        raise HTTPException(status_code=400, detail="OTP expired")

    if otp_data["otp"] != body.otp:
        raise HTTPException(status_code=400, detail="Invalid OTP")

    db.collection("otps").document(body.email).update({"verified": True})

    return {"message": "OTP verified successfully"}


# ─── Reset Password ─────────────────────────────────────────
async def reset_password(body: ResetPasswordRequest) -> dict:
    otp_doc = db.collection("otps").document(body.email).get()
    if not otp_doc.exists:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="OTP not found")

    otp_data = otp_doc.to_dict()

    if not otp_data.get("verified"):
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE, detail="OTP not verified")

    if otp_data["otp"] != body.otp:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid OTP")

    docs = db.collection("users").where("email", "==", body.email).limit(1).get()
    if not docs:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    docs[0].reference.update({"password": hash_password(body.new_password)})
    db.collection("otps").document(body.email).delete()

    return {"message": "Password reset successful"}


# ─── Change Password ────────────────────────────────────────
async def change_password(body: ChangePasswordRequest, user_id: str) -> dict:
    user_doc = db.collection("users").document(user_id).get()
    if not user_doc.exists:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    user = user_doc.to_dict()

    if not verify_password(body.old_password, user["password"]):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Old password is incorrect")

    db.collection("users").document(user_id).update({
        "password": hash_password(body.new_password)
    })

    return {"message": "Password changed successfully"}
