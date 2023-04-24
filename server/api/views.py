# DRF Imports
from rest_framework.viewsets import ModelViewSet

# Internal App Imports
from .serializers import (
    AccountSerializer,
    AccountTypeSerializer,
    CategorySerializer,
    CategoryGroupSerializer,
    LabelSerializer,
    Transactionserializer
)
from account.models import Account, AccountType
from account.functions import update_account_balance
from transaction.models import Category, CategoryGroup, Label, Transaction

# Create your views here.
class AccountViewSet(ModelViewSet):
    serializer_class = AccountSerializer
    queryset = Account.objects.all()

class AccountTypeViewSet(ModelViewSet):
    serializer_class = AccountTypeSerializer
    queryset = AccountType.objects.all()

class CategoryViewSet(ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class CategoryGroupViewSet(ModelViewSet):
    serializer_class = CategoryGroupSerializer
    queryset = CategoryGroup.objects.all()

class LabelViewSet(ModelViewSet):
    serializer_class = LabelSerializer
    queryset = Label.objects.all()

class TransactionViewSet(ModelViewSet):
    serializer_class = Transactionserializer
    queryset = Transaction.objects.all()

    def perform_create(self, serializer):
        """
        update latest_balance of given account post transaction
        """
        category = serializer.validated_data.get('category')
        if category.group.is_expense:
            account = serializer.validated_data.get('account')
            amount = serializer.validated_data.get('amount')
            update_account_balance(account=account, amount=amount)
        super().perform_create(serializer)
