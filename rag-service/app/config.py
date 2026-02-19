import os
from dotenv import load_dotenv

load_dotenv()

# --- API Keys ---
GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")
SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY = os.getenv("SUPABASE_KEY", "")

# --- CORS ---
FRONTEND_URL = os.getenv("FRONTEND_URL", "https://donghank.website")

# --- Models ---
GROQ_MODEL = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")
EMBEDDING_MODEL = "BAAI/bge-small-en-v1.5"

# --- Vector Search ---
MATCH_THRESHOLD = 0.2
MATCH_COUNT = 8
