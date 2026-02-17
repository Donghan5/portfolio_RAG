from supabase import create_client, Client

from app.config import SUPABASE_URL, SUPABASE_KEY, MATCH_THRESHOLD, MATCH_COUNT
from app.services.embedding import generate_embedding

_client: Client | None = None


def get_supabase() -> Client:
    global _client
    if _client is None:
        _client = create_client(SUPABASE_URL, SUPABASE_KEY)
    return _client


def search_similar(query: str, threshold: float = MATCH_THRESHOLD, count: int = MATCH_COUNT) -> list[dict]:
    """Embed the query and perform vector similarity search in Supabase."""
    query_embedding = generate_embedding(query)
    client = get_supabase()

    response = client.rpc(
        "match_documents",
        {
            "query_embedding": query_embedding,
            "match_threshold": threshold,
            "match_count": count,
        },
    ).execute()

    return response.data or []


def insert_document(content: str, metadata: dict) -> None:
    """Generate embedding for content and insert into Supabase."""
    embedding = generate_embedding(content)
    client = get_supabase()

    client.table("documents").insert(
        {
            "content": content,
            "metadata": metadata,
            "embedding": embedding,
        }
    ).execute()
