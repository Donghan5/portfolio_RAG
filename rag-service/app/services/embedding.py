import logging
from fastembed import TextEmbedding
from app.config import EMBEDDING_MODEL

logger = logging.getLogger(__name__)

_model: TextEmbedding | None = None


def init_model() -> None:
    """Initialize the embedding model singleton. Call once at startup."""
    global _model
    if _model is None:
        logger.info(f"Loading embedding model: {EMBEDDING_MODEL}")
        _model = TextEmbedding(model_name=EMBEDDING_MODEL)
        logger.info("Embedding model loaded.")


def get_model() -> TextEmbedding:
    """Return the singleton model instance."""
    if _model is None:
        raise RuntimeError("Embedding model not initialized. Call init_model() first.")
    return _model


def generate_embedding(text: str) -> list[float]:
    model = get_model()
    embeddings = list(model.embed([text]))
    return embeddings[0].tolist()
