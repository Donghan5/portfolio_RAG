# Portfolio RAG

Personal portfolio website for Donghan Kim with an AI-powered chat widget that answers questions about his background using Retrieval-Augmented Generation (RAG).

**Live site:** https://donghank.website

---

## Architecture

```
┌─────────────────────┐        ┌──────────────────────────────────┐
│   Vercel (Frontend)  │        │     Render (Unified Backend)     │
│                     │        │                                  │
│   React + Vite      │──POST──▶   FastAPI                       │
│   Tailwind CSS v4   │  /api/ │   ┌────────────────────────┐    │
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

### RAG Pipeline

```
1. User sends a message via the CommandPalette chat widget
2. FastEmbed generates a 384-dim embedding (BAAI/bge-small-en-v1.5, ONNX)
3. Supabase pgvector finds the top-8 similar document chunks (match_documents RPC)
4. Context chunks + user query are assembled into a prompt
5. Groq Llama 3.3 70B generates a concise response
6. Response returned as JSON { reply: "..." }
```

---

## Project Structure

```
portfolio_RAG/
├── frontend/                        # React SPA (deployed to Vercel)
│   ├── src/
│   │   ├── components/
│   │   │   ├── CommandPalette.tsx   # AI chat widget (fixed bottom overlay)
│   │   │   ├── Navbar.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   ├── pages/
│   │   │   └── HomePage.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── rag-service/                     # FastAPI backend (deployed to Render)
│   ├── app/
│   │   ├── main.py                  # FastAPI app, CORS, lifespan startup
│   │   ├── config.py                # Environment config
│   │   ├── routers/
│   │   │   ├── chat.py              # POST /api/chat endpoint
│   │   │   └── health.py            # GET /health
│   │   └── services/
│   │       ├── embedding.py         # FastEmbed singleton (loaded at startup)
│   │       ├── vector_store.py      # Supabase pgvector similarity search
│   │       └── llm.py               # Async Groq client
│   ├── data/
│   │   └── portfolio.json           # Source-of-truth for RAG knowledge base
│   ├── ingest.py                    # One-time script to seed Supabase
│   ├── supabase_setup.sql           # SQL to provision the vector table + RPC
│   ├── Dockerfile
│   └── requirements.txt
│
├── render.yaml                      # Render Blueprint (IaC for backend)
├── vercel.json                      # Vercel config (SPA rewrites)
└── ARCHITECTURE.md                  # Detailed architecture notes
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, Tailwind CSS v4, TypeScript |
| Backend | FastAPI, Python 3.11, Docker |
| Embeddings | FastEmbed (ONNX runtime), `BAAI/bge-small-en-v1.5` |
| LLM | Groq API — `llama-3.3-70b-versatile` |
| Vector store | Supabase PostgreSQL + `pgvector` |
| Frontend hosting | Vercel |
| Backend hosting | Render (free tier, 512 MB RAM) |

---

## Local Development

### Prerequisites

- Node.js 20+
- Python 3.11+

### Frontend

```bash
cd frontend
npm install
cp .env.example .env          # set VITE_API_URL to your backend URL
npm run dev                   # http://localhost:5173
```

### Backend

```bash
cd rag-service
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env          # fill in API keys (see Environment Variables below)
uvicorn app.main:app --reload # http://localhost:8000
```

### Seed the knowledge base

Run this once after setting up Supabase (see [Supabase Setup](#supabase-setup)):

```bash
cd rag-service
source venv/bin/activate
python ingest.py
```

---

## Supabase Setup

Run `rag-service/supabase_setup.sql` in your Supabase SQL Editor. It:

1. Enables the `pgvector` extension
2. Creates the `documents` table with a `vector(384)` column
3. Creates an IVFFlat index for fast cosine similarity search
4. Creates the `match_documents` RPC function used by the backend

---

## Environment Variables

### Backend (`rag-service/.env`)

| Variable | Description |
|----------|-------------|
| `GROQ_API_KEY` | Groq API key for LLM inference |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_KEY` | Supabase service role key |
| `FRONTEND_URL` | Comma-separated allowed CORS origins |
| `GROQ_MODEL` | Override LLM model (default: `llama-3.3-70b-versatile`) |

### Frontend (`frontend/.env`)

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend URL (e.g. `https://portfolio-rag-backend.onrender.com`) |

---

## Deployment

### Backend (Render)

The `render.yaml` Blueprint defines a Docker web service pointing to `rag-service/`. Connect the repo in the Render dashboard and set the secret env vars (`GROQ_API_KEY`, `SUPABASE_URL`, `SUPABASE_KEY`).

The embedding model (`BAAI/bge-small-en-v1.5`) is pre-downloaded at Docker **build time** and baked into the image, avoiding any runtime download latency on Render's free tier.

### Frontend (Vercel)

Import the repo into Vercel, set the root directory to `frontend/`, and add the `VITE_API_URL` environment variable pointing to the Render service URL.

---

## Key Design Decisions

- **FastEmbed (ONNX) over sentence-transformers (PyTorch)** — ~10× smaller memory footprint; fits comfortably within the 512 MB Render free tier.
- **Model baked into Docker image** — eliminates cold-start download time on every deploy.
- **Singleton embedding model** — loaded once via FastAPI lifespan, shared across all requests.
- **Async I/O throughout** — `AsyncGroq` for LLM calls, `asyncio.to_thread` to wrap the synchronous Supabase client.
- **CORS whitelist** — backend only accepts requests from origins listed in `FRONTEND_URL`.
