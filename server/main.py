from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from postgrest import APIError

from db import supabase
from validators import Transaction

app = FastAPI()

origins = [
    "http://localhost:5173"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def root():
    return {"message": "Root API"}

# Category Endpoints
@app.get("/categories")
def get_categories():
    categories = (
        supabase
        .table("category")
        .select('name, group(name)')
        .execute()
    )
    return categories

# Transaction Endpoints
@app.get("/transactions")
def get_transactions():
    transactions = (
        supabase
        .table("transaction")
        .select("*")
        .execute()
    )
    return transactions

@app.post("/transactions")
def create_transaction(transaction: Transaction):
    transaction = transaction.dict()
    try:
        data, count = (
            supabase
            .table("transaction")
            .insert(transaction)
            .execute()
        )
    except APIError as error:
        return {"status": "failed", "message": "Something went wrong"}
    else:
        return {
            "status": "success",
            "message": "Transaction Created",
            "data": data
        }