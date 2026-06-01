from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import auth
from routes import profile
from routes import stations       
from routes import bookings   

app = FastAPI(
    title="Station Hub API",
    description="Backend API for Station Hub - Transport Booking App",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(profile.router)
app.include_router(stations.router)
app.include_router(bookings.router) 


@app.get("/")
async def root():
    return {"message": "Station Hub API is running", "version": "1.0.0"}


@app.get("/health")
async def health():
    return {"status": "ok"}
