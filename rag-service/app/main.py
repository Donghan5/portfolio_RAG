import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import FRONTEND_URL
from app.routers.chat import router as chat_router
from app.services.embedding import init_model

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load embedding model once at startup (singleton)
    init_model()
    logger.info("RAG service ready.")
    yield


app = FastAPI(
    title="Portfolio RAG Service",
    version="2.0.0",
    lifespan=lifespan,
)

# --- CORS ---
allowed_origins = [
    url.strip() for url in FRONTEND_URL.split(",") if url.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# Mount chat router under /api to match frontend expectations
app.include_router(chat_router, prefix="/api")


@app.get("/")
async def health_check():
    return {"status": "healthy"}


@app.get("/health")
async def health():
    return {"status": "ok"}
