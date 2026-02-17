from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.vector_store import search_similar
from app.services.llm import generate_response

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    results = search_similar(request.message)

    context_chunks = [r["content"] for r in results if "content" in r]

    if not context_chunks:
        return ChatResponse(
            reply="I don't have enough context to answer that question about Donghan. Try asking about his skills, projects, or experience!"
        )

    reply = generate_response(request.message, context_chunks)
    return ChatResponse(reply=reply)
