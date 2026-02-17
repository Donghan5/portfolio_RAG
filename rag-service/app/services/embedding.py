from fastembed import TextEmbedding

from app.config import EMBEDDING_MODEL

_model: TextEmbedding | None = None


def get_model() -> TextEmbedding:
    global _model
    if _model is None:
        _model = TextEmbedding(model_name=EMBEDDING_MODEL)
    return _model


def generate_embedding(text: str) -> list[float]:
    model = get_model()
    embeddings = list(model.embed([text]))
    return embeddings[0].tolist()
