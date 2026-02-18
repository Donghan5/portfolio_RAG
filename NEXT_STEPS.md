# Next Steps — Save Point

## Current State (2026-02-18)

### What's Done
- [x] Frontend deployed on Vercel (donghank.website)
- [x] Unified FastAPI backend code ready (rag-service/)
- [x] render.yaml configured for Docker deployment
- [x] Dockerfile pre-downloads BAAI/bge-small-en-v1.5 model at build time
- [x] Async patterns: AsyncGroq, asyncio.to_thread for Supabase
- [x] CORS configured via FRONTEND_URL env var
- [x] ARCHITECTURE.md written
- [x] All code pushed to main branch

### What's NOT Done Yet
- [ ] Deploy unified backend to Render (see Step 1)
- [ ] Set env vars on Render dashboard (see Step 2)
- [ ] Update VITE_API_URL on Vercel (see Step 3)
- [ ] Re-embed documents with new model (see Step 4)
- [ ] Clean up old services (see Step 5)

---

## Step 1: Deploy Unified Backend to Render

1. Go to https://dashboard.render.com
2. Delete the old `portfolio-api-gateway` NestJS service
3. Create a new Web Service:
   - Connect your `portfolio_RAG` GitHub repo
   - **Root Directory:** `rag-service`
   - **Runtime:** Docker
   - **Plan:** Free
4. Or use Render Blueprint: it will auto-detect `render.yaml`

## Step 2: Set Environment Variables on Render

In the new Render service dashboard, add these env vars:

```
GROQ_API_KEY=<your-groq-api-key>
SUPABASE_URL=<your-supabase-project-url>
SUPABASE_KEY=<your-supabase-service-role-key>
FRONTEND_URL=https://donghank.website,https://portfolio-rag-six.vercel.app
```

## Step 3: Update Frontend API URL on Vercel

1. Go to https://vercel.com → your project → Settings → Environment Variables
2. Set `VITE_API_URL` to your new Render URL:
   ```
   VITE_API_URL=https://portfolio-rag-backend.onrender.com
   ```
   (Replace with your actual Render service URL)
3. Redeploy the frontend (Vercel → Deployments → Redeploy)

## Step 4: Re-embed Documents in Supabase

The embedding model changed from `all-MiniLM-L6-v2` to `BAAI/bge-small-en-v1.5`.
Existing vectors in Supabase are incompatible. You must re-run ingestion.

```bash
cd rag-service
# Activate your local venv
pip install -r requirements.txt
# Run your ingestion script (adjust path as needed)
python -m app.scripts.ingest
```

If you don't have an ingestion script, ask Claude Code to help you write one.

## Step 5: Clean Up Old Services

1. **Koyeb:** Delete the `portfolio-rag-service` app at https://app.koyeb.com
2. **Render:** Delete the old `portfolio-api-gateway` NestJS service (if not done in Step 1)
3. **Code cleanup (optional):**
   - The `api-gateway/` directory is no longer used in production
   - The `koyeb.yaml` file is no longer needed
   - Keep them for reference or delete them

## Step 6: Verify End-to-End

1. Open https://donghank.website
2. Press Ctrl+K to focus the chat widget
3. Ask: "Who is Donghan Kim?"
4. Verify you get a response from the RAG pipeline
5. Navigate to /about, /experience, /projects — confirm chat works on all pages
6. Test error state: temporarily set a wrong GROQ_API_KEY and verify the error message

---

## Resume Context for Claude Code

If you start a new Claude Code session, paste this to resume:

> We consolidated the portfolio RAG architecture from 3 services to 2.
> The unified FastAPI backend is in `rag-service/` and deploys to Render via Docker.
> It uses FastEmbed (BAAI/bge-small-en-v1.5 ONNX), Supabase pgvector, and Groq Llama 3.
> The frontend is on Vercel at donghank.website.
> See ARCHITECTURE.md for the full architecture diagram.
> See NEXT_STEPS.md for deployment checklist.
