from groq import AsyncGroq
from app.config import GROQ_API_KEY, GROQ_MODEL

_client: AsyncGroq | None = None

SYSTEM_PROMPT = """You are a helpful AI assistant on Donghan Kim's personal portfolio website.
Your role is to answer questions about Donghan based ONLY on the provided context.
Be concise, friendly, and professional. If the context doesn't contain enough information
to answer the question, say so honestly rather than making things up.
Always respond in a natural conversational tone. Keep answers short (2-4 sentences) unless
the user asks for detail."""


def get_groq() -> AsyncGroq:
    global _client
    if _client is None:
        _client = AsyncGroq(api_key=GROQ_API_KEY)
    return _client


async def generate_response(query: str, context_chunks: list[str]) -> str:
    """Build a prompt with retrieved context and call Groq Llama 3."""
    context = "\n\n---\n\n".join(context_chunks)

    user_prompt = f"""Context about Donghan Kim:
{context}

---

User question: {query}

Answer based on the context above:"""

    client = get_groq()
    response = await client.chat.completions.create(
        model=GROQ_MODEL,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_prompt},
        ],
        temperature=0.4,
        max_tokens=512,
    )

    return response.choices[0].message.content or "I couldn't generate a response."
