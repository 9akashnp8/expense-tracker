from decimal import Decimal

from .models import Account

def update_account_balance(account: Account, amount: Decimal) -> None:
    """
    given an amount, updates the 'latest_balance' of an account
    accordingly.
    """
    account.latest_balance -= amount
    account.save()