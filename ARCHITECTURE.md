# Portfolio RAG - Architecture

## Overview

A personal portfolio website with an AI-powered chat widget that answers questions about Donghan Kim using Retrieval-Augmented Generation (RAG).

## Architecture Diagram

```
┌─────────────────────┐        ┌──────────────────────────────────┐
│   Vercel (Frontend)  │        │     Render (Unified Backend)     │
│                     │        │                                  │
│   React + Vite      │──POST──▶   FastAPI                       │
│   Tailwind CSS      │  /api/ │   ┌────────────────────────┐    │
│   React Router      │  chat  │   │  /api/chat (POST)      │    │
│                     │◀─JSON──│   │  CORS + Lifespan       │    │
│   donghank.website  │        │   └──────┬─────────┬───────┘    │
└─────────────────────┘        │          │         │             │
                               │   ┌──────▼───┐ ┌──▼──────────┐  │
                               │   │ FastEmbed │ │ Groq API    │  │
                               │   │ ONNX RT   │ │ Llama 3 70B │  │
                               │   │ bge-small │ │ (LLM)       │  │
                               │   └──────┬───┘ └─────────────┘  │
                               │          │                       │
                               │   ┌──────▼──────────────┐       │
                               │   │ Supabase (pgvector)  │       │
                               │   │ Vector similarity    │       │
                               │   │ search via RPC       │       │
                               │   └─────────────────────┘       │
                               └──────────────────────────────────┘
```

## Services

### Frontend (Vercel)

- **Stack:** React 19, Vite, Tailwind CSS v4, React Router
- **URL:** https://donghank.website
- **Key feature:** `CommandPalette` chat widget available on all pages (fixed bottom overlay)
- **Config:** `VITE_API_URL` env var points to the Render backend

### Unified Backend (Render)

- **Stack:** FastAPI, Python 3.11, Docker
- **Runtime:** Render free tier (512MB RAM)
- **Endpoint:** `POST /api/chat` — receives a user message, returns an AI-generated reply

#### RAG Pipeline Flow

```
1. User sends message
2. FastEmbed generates a 384-dim embedding (BAAI/bge-small-en-v1.5, ONNX)
3. Supabase pgvector finds top-5 similar document chunks (match_documents RPC)
4. Context chunks + user query are assembled into a prompt
5. Groq Llama 3 70B generates a concise response
6. Response returned as JSON { reply: "..." }
```

#### Key Design Decisions

- **FastEmbed (ONNX)** instead of sentence-transformers (PyTorch) — 10x smaller footprint, fits in 512MB RAM
- **Model pre-downloaded at Docker build time** — baked into image, no runtime download overhead
- **Singleton pattern** — embedding model loaded once at startup via FastAPI lifespan
- **Async I/O** — AsyncGroq for LLM calls, asyncio.to_thread for Supabase sync client
- **CORS whitelist** — only allows configured frontend origins via `FRONTEND_URL` env var

## External Services

| Service | Purpose | Free Tier |
|---------|---------|-----------|
| **Supabase** | PostgreSQL + pgvector for document storage and similarity search | 500MB database |
| **Groq** | LLM inference (Llama 3 70B) | Free API tier |
| **Vercel** | Frontend hosting + CDN | Free for personal projects |
| **Render** | Backend Docker hosting | 512MB RAM free tier |

## Environment Variables

### Render (Backend)

| Variable | Description |
|----------|-------------|
| `GROQ_API_KEY` | Groq API key for LLM inference |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_KEY` | Supabase service role key |
| `FRONTEND_URL` | Comma-separated allowed origins for CORS |

### Vercel (Frontend)

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Render backend URL (e.g. `https://portfolio-rag-backend.onrender.com`) |

## Project Structure

```
portfolio_RAG/
├── frontend/                  # React SPA (Vercel)
│   ├── src/
│   │   ├── components/
│   │   │   ├── CommandPalette.tsx   # AI chat widget
│   │   │   └── Navbar.tsx
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
├── rag-service/               # Unified FastAPI backend (Render)
│   ├── app/
│   │   ├── main.py            # FastAPI app, CORS, lifespan
│   │   ├── config.py          # Environment config
│   │   ├── routers/
│   │   │   └── chat.py        # POST /api/chat endpoint
│   │   └── services/
│   │       ├── embedding.py   # FastEmbed singleton
│   │       ├── vector_store.py # Supabase pgvector search
│   │       └── llm.py         # Groq async LLM client
│   ├── Dockerfile
│   └── requirements.txt
│
├── render.yaml                # Render Blueprint (IaC)
├── vercel.json                # Vercel config (SPA rewrites)
└── ARCHITECTURE.md            # This file
```
