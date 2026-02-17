import httpx

from app.config import EMBEDDING_MODEL, HF_API_TOKEN

_API_URL = f"https://api-inference.huggingface.co/pipeline/feature-extraction/{EMBEDDING_MODEL}"


def generate_embedding(text: str) -> list[float]:
    """Generate embedding using the Hugging Face Inference API (free tier)."""
    headers = {}
    if HF_API_TOKEN:
        headers["Authorization"] = f"Bearer {HF_API_TOKEN}"

    response = httpx.post(
        _API_URL,
        json={"inputs": text, "options": {"wait_for_model": True}},
        headers=headers,
        timeout=30.0,
    )
    response.raise_for_status()
    return response.json()
