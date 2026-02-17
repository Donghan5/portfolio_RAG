# Project: Personal Portfolio with RAG Chatbot (Microservices Architecture)

You are an expert Full-Stack Developer, AI Engineer, and DevOps Specialist. 
Your goal is to build a personal portfolio website based on the provided `index.html`. 
The project implements a Microservices Architecture featuring a React frontend, a NestJS API Gateway, and a Python FastAPI RAG service powered by Groq API (Llama 3).

## 1. System Architecture & Tech Stack

* **Frontend (`/frontend`):**
    * Framework: React (Vite) + TypeScript.
    * Styling: Tailwind CSS (Strictly maintain the 'Clean Dark Theme' colors from `index.html`).
    * Deployment Target: Vercel.
* **API Gateway (`/api-gateway`):**
    * Framework: NestJS (TypeScript).
    * Role: Receives requests from Frontend, applies CORS/Rate Limiting, and proxies AI chat requests to the RAG Service.
    * Deployment Target: Render (Free Tier).
* **AI RAG Service (`/rag-service`):**
    * Framework: Python (FastAPI).
    * LLM Provider: Groq API (`llama3-8b-8192` or `llama3-70b-8192`).
    * Vector Database: Supabase (pgvector).
    * Role: Text chunking, embedding generation, vector similarity search, and prompt generation for Llama 3.
    * Deployment Target: Koyeb (Free Tier).

## 2. Strict Development Rules

1.  **Security First:** NEVER hardcode API keys (Groq, Supabase) in any file. Use `.env` files for `/api-gateway` and `/rag-service`. The `/frontend` must only contain the URL to the `/api-gateway`.
2.  **Modular Code:** Do not dump everything into single files. Separate controllers, services, and modules in NestJS. Use Routers in FastAPI.
3.  **UI/UX:** The original layout, typography, and dark theme of `index.html` must be preserved precisely in Tailwind classes. Add a modern, non-intrusive floating chat widget for the AI interactions.

## 3. Step-by-Step Execution Plan

I will instruct you to execute these phases one by one. Do not proceed to the next phase until I confirm.

### Phase 1: Directory Setup & Frontend Migration
1. Initialize the monorepo structure with three folders: `/frontend`, `/api-gateway`, `/rag-service`.
2. Initialize Vite + React + TypeScript + Tailwind in `/frontend`.
3. Migrate the `index.html` structure into React components (`Navbar.tsx`, `Hero.tsx`, `About.tsx`, `Experience.tsx`, `Projects.tsx`).
4. Build a `ChatWidget.tsx` component with a neat UI for interacting with the AI.

### Phase 2: RAG Service Setup (FastAPI)
1. Initialize a Python virtual environment in `/rag-service` and install dependencies.
2. Create an ingestion script (`ingest.py`) to parse the portfolio data (skills, military experience, 42 Paris projects), chunk it, and insert it into Supabase pgvector.
3. Create the `/chat` endpoint (`main.py`) that takes a user query, performs a vector search in Supabase, constructs a prompt with the retrieved context, and calls the Groq API. Return the Llama 3 response.

### Phase 3: API Gateway Setup (NestJS)
1. Initialize NestJS in `/api-gateway`.
2. Configure basic security (Helmet, CORS allowing the Vercel frontend domain).
3. Create a `ChatModule` that exposes a POST endpoint `/api/chat`.
4. The NestJS endpoint should forward the payload to the FastAPI `/rag-service` URL and return the response back to the frontend.

### Phase 4: Full Integration Testing
1. Connect the Frontend `ChatWidget.tsx` to the NestJS endpoint.
2. Implement loading states and error handling in the UI.

Please acknowledge that you have read and understood this architecture and execution plan. Reply with a brief summary of what we are building, and wait for my command to start Phase 1.
