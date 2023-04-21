from datetime import datetime
from pydantic import BaseModel
from typing import Optional

class Transaction(BaseModel):
    item: str
    amount: int
    transaction_date_time: str
    category: int
    account: int
    label: Optional[str]
    notes: Optional[str]