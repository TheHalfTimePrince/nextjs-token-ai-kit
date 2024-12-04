from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ImageRequest(BaseModel):
    prompt: str
    dimensions: tuple[int, int]

@app.post("/get")
async def generate_image(request: ImageRequest):
    return {"image": "image"}

# Add health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}