-- Run this SQL in your Supabase SQL Editor to set up the vector store.

-- 1. Enable the pgvector extension
create extension if not exists vector;

-- 2. Create the documents table
create table if not exists documents (
  id bigserial primary key,
  content text not null,
  metadata jsonb default '{}'::jsonb,
  embedding vector(384)  -- all-MiniLM-L6-v2 produces 384-dim vectors
);

-- 3. Create an index for fast similarity search
create index if not exists documents_embedding_idx
  on documents
  using ivfflat (embedding vector_cosine_ops)
  with (lists = 10);

-- 4. Create the match_documents function used by the RAG service
create or replace function match_documents(
  query_embedding vector(384),
  match_threshold float default 0.3,
  match_count int default 5
)
returns table (
  id bigint,
  content text,
  metadata jsonb,
  similarity float
)
language sql stable
as $$
  select
    d.id,
    d.content,
    d.metadata,
    1 - (d.embedding <=> query_embedding) as similarity
  from documents d
  where 1 - (d.embedding <=> query_embedding) > match_threshold
  order by d.embedding <=> query_embedding
  limit match_count;
$$;
