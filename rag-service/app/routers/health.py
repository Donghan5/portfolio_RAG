import asyncio
import logging

from fastapi import APIRouter
from app.services.vector_store import get_supabase

logger = logging.getLogger(__name__)
router = APIRouter()


@router.get("/health/supabase")
async def supabase_health():
    """Lightweight Supabase ping to prevent Free tier auto-pause."""
    def _ping():
        client = get_supabase()
        client.table("documents").select("id").limit(1).execute()

    try:
        await asyncio.to_thread(_ping)
        return {"status": "ok", "service": "supabase"}
    except Exception as e:
        logger.error(f"Supabase health check failed: {e}")
        return {"status": "error", "detail": str(e)}
