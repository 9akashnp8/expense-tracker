from decouple import config
from supabase import create_client

url = config("SUPABASE_URL")
key = config("SUPABASE_KEY")
supabase = create_client(url, key)