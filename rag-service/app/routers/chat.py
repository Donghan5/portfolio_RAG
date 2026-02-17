import logging

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.vector_store import search_similar
from app.services.llm import generate_response

logger = logging.getLogger(__name__)

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    try:
        results = search_similar(request.message)
    except Exception as e:
        logger.error(f"Vector search failed: {e}")
        raise HTTPException(status_code=500, detail=f"Vector search error: {str(e)}")

    context_chunks = [r["content"] for r in results if "content" in r]

    if not context_chunks:
        return ChatResponse(
            reply="I don't have enough context to answer that question about Donghan. Try asking about his skills, projects, or experience!"
        )

    try:
        reply = generate_response(request.message, context_chunks)
    except Exception as e:
        logger.error(f"LLM generation failed: {e}")
        raise HTTPException(status_code=500, detail=f"LLM error: {str(e)}")

    return ChatResponse(reply=reply)
