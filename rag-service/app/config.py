import os
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")
SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY = os.getenv("SUPABASE_KEY", "")

GROQ_MODEL = "llama3-70b-8192"
EMBEDDING_MODEL = "all-MiniLM-L6-v2"
MATCH_THRESHOLD = 0.3
MATCH_COUNT = 5
