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
