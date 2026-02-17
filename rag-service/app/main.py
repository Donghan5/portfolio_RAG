import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.chat import router as chat_router

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Preload the embedding model at startup so the health check
    # only passes once the service is truly ready to handle requests.
    logger.info("Loading embedding model...")
    from app.services.embedding import get_model
    get_model()
    logger.info("Embedding model loaded successfully.")
    yield


app = FastAPI(title="Portfolio RAG Service", version="1.0.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router)


@app.get("/")
def health_check():
    return {"status": "healthy"}


@app.get("/health")
async def health():
    return {"status": "ok"}
