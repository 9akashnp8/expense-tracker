from django.db import models

# Create your models here.
class AccountType(models.Model):
    """
    model to define type of account i.e., asset class or liability
    """
    name = models.CharField(max_length=255)
    is_asset_class = models.BooleanField()
    created_on = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name

class Account(models.Model):
    """
    main account model from which money is deposited/used
    """
    name = models.CharField(max_length=255)
    type = models.ForeignKey(AccountType, null=True, on_delete=models.SET_NULL)
    opening_date = models.DateField()
    starting_balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    latest_balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    default_currency = models.CharField(max_length=3)
    created_on = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name
