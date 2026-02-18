"""
Creates the pgvector extension, documents table, and match_documents function
in Supabase via a direct PostgreSQL connection.

Usage:
    DB_PASSWORD=your_password python setup_db.py

Get your DB password from:
    Supabase Dashboard → Settings → Database → Database password
"""

import os
import sys

import psycopg2
from dotenv import load_dotenv

load_dotenv()

# Extract project ref from SUPABASE_URL (e.g. https://qidrehuuharylhxidyrv.supabase.co)
supabase_url = os.getenv("SUPABASE_URL", "")
project_ref = supabase_url.removeprefix("https://").split(".")[0]

db_password = os.getenv("DB_PASSWORD", "")
if not db_password:
    print("ERROR: Set DB_PASSWORD environment variable.")
    print("  Get it from: Supabase Dashboard → Settings → Database → Database password")
    sys.exit(1)

conn_str = (
    f"host=db.{project_ref}.supabase.co "
    f"port=5432 dbname=postgres user=postgres password={db_password} sslmode=require"
)

SQL = """
create extension if not exists vector;

create table if not exists documents (
    id bigserial primary key,
    content text not null,
    metadata jsonb,
    embedding vector(384)
);

create or replace function match_documents(
    query_embedding vector(384),
    match_threshold float,
    match_count int
)
returns table(id bigint, content text, metadata jsonb, similarity float)
language sql stable
as $$
    select
        id,
        content,
        metadata,
        1 - (embedding <=> query_embedding) as similarity
    from documents
    where 1 - (embedding <=> query_embedding) > match_threshold
    order by embedding <=> query_embedding
    limit match_count;
$$;
"""

try:
    print(f"Connecting to db.{project_ref}.supabase.co ...")
    conn = psycopg2.connect(conn_str)
    conn.autocommit = True
    cur = conn.cursor()
    cur.execute(SQL)
    cur.close()
    conn.close()
    print("Done! Extension, table, and function created successfully.")
except Exception as e:
    print(f"ERROR: {e}")
    sys.exit(1)
