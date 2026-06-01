import firebase_admin
from firebase_admin import credentials, firestore
import os
import json
import base64
from dotenv import load_dotenv

load_dotenv()

# Support multiple ways of providing Firebase credentials:
# 1. Path to JSON file (default): FIREBASE_CREDENTIALS=/path/to/serviceAccountKey.json
# 2. JSON string in env var: FIREBASE_CREDENTIALS='{"type":...}'
# 3. Base64-encoded JSON in env var

cred_env = os.getenv("FIREBASE_CREDENTIALS")

def _get_credential_from_env(value):
    # If value is a path to an existing file, use it
    if os.path.exists(value):
        return credentials.Certificate(value)
    # Try parsing as JSON string
    try:
        cred_dict = json.loads(value)
        return credentials.Certificate(cred_dict)
    except Exception:
        pass
    # Try base64-decoding then parsing
    try:
        decoded = base64.b64decode(value)
        cred_dict = json.loads(decoded)
        return credentials.Certificate(cred_dict)
    except Exception:
        pass
    raise ValueError("FIREBASE_CREDENTIALS must be a valid path, JSON string, or base64 JSON")

# Fallback path if no env var provided
default_path = "config/serviceAccountKey.json"

if not firebase_admin._apps:
    if cred_env:
        cred = _get_credential_from_env(cred_env)
    else:
        cred = credentials.Certificate(default_path)
    firebase_admin.initialize_app(cred)

db = firestore.client()
