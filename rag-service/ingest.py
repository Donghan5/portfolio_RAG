"""
Ingestion script: reads portfolio data from data/portfolio.json,
generates embeddings, and inserts into Supabase pgvector.

Usage:
    cd rag-service
    source venv/bin/activate
    python ingest.py
"""

import json
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()

from app.services.vector_store import insert_document  # noqa: E402


def load_portfolio_data() -> list[dict]:
    data_path = Path(__file__).parent / "data" / "portfolio.json"
    with open(data_path, "r") as f:
        return json.load(f)


def main():
    chunks = load_portfolio_data()
    print(f"Loaded {len(chunks)} chunks from portfolio.json")

    for i, chunk in enumerate(chunks):
        content = chunk["content"]
        metadata = {"category": chunk["category"]}

        print(f"[{i + 1}/{len(chunks)}] Inserting: {content[:60]}...")
        insert_document(content, metadata)

    print(f"\nDone! Inserted {len(chunks)} documents into Supabase.")


if __name__ == "__main__":
    main()
