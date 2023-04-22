# Django & DRF Imports
from django.db import models
from django.utils import timezone

# Internal Imports
from account.models import Account

# Create your models here.
class CategoryGroup(models.Model):
    """parent category"""
    name = models.CharField(max_length=255)
    is_expense = models.BooleanField()
    is_budgeted = models.BooleanField()
    budget_type = models.CharField(max_length=100, null=True, blank=True)
    budget = models.DecimalField(max_digits=4, decimal_places=2, null=True, blank=True)
    created_on = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name

class Category(models.Model):
    """main category grouped by CategoryGroup"""
    name = models.CharField(max_length=255)
    group = models.ForeignKey(CategoryGroup, null=True, on_delete=models.SET_NULL)
    is_budgeted = models.BooleanField()
    budget_type = models.CharField(max_length=100, null=True, blank=True)
    budget = models.DecimalField(max_digits=4, decimal_places=2, null=True, blank=True)
    created_on = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name

class Label(models.Model):
    """label class"""
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name

class Transaction(models.Model):
    item = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=4, decimal_places=2)
    txn_date_time = models.DateTimeField(default=timezone.now)
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)
    account = models.ForeignKey(Account, null=True, on_delete=models.SET_NULL)
    label = models.ManyToManyField(Label)
    notes = models.CharField(max_length=255, null=True, blank=True)
    created_on = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return self.item