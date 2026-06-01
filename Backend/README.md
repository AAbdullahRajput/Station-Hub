# Station Hub - Backend API

FastAPI + Firebase Firestore + JWT Auth

---

## Setup

### 1. Clone & enter project
```bash
cd station-hub-backend
```

### 2. Create virtual environment
```bash
python -m venv venv
source venv/bin/activate        # Mac/Linux
venv\Scripts\activate           # Windows
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Add Firebase key
Place your `serviceAccountKey.json` inside `config/` folder.

### 5. Configure .env
```
SECRET_KEY=station_hub_super_secret_jwt_key_2024
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=1440
GMAIL_USER=kh.babar.naseer@gmail.com
GMAIL_APP_PASSWORD=your_app_password
FIREBASE_CREDENTIALS=config/serviceAccountKey.json
```

### 6. Run server
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 7. Open API docs
```
http://localhost:8000/docs
```

---

## Firestore Collections

| Collection  | Description              |
|-------------|--------------------------|
| users       | Registered users         |
| otps        | OTP records (by email)   |


---

## API Endpoints

### Auth
| Method | Endpoint                  | Auth | Description           |
|--------|---------------------------|------|-----------------------|
| POST   | /auth/register            | No   | Register new user     |
| POST   | /auth/login               | No   | Login                 |
| POST   | /auth/forgot-password     | No   | Send OTP to email     |
| POST   | /auth/verify-otp          | No   | Verify OTP            |
| POST   | /auth/reset-password      | No   | Reset password        |
| POST   | /auth/change-password     | Yes  | Change password       |

---

## Auth Header (for protected routes)
```
Authorization: Bearer <your_jwt_token>
```

---

## Sample Register Request
```json
POST /auth/register
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "password": "secret123",
  "phone": "03001234567"
}
```

## Sample Login Response
```json
{
  "message": "Login successful",
  "token": "eyJhbGci...",
  "user": {
    "id": "abc123",
    "full_name": "John Doe",
    "email": "john@example.com",
    "phone": "03001234567",
    "profile_image": ""
  }
}
```
