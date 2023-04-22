# DRF Imports
from rest_framework.viewsets import ModelViewSet

# Internal App Imports
from .serializers import (
    AccountSerializer,
    AccountTypeSerializer,
    CategorySerializer,
    CategoryGroupSerializer
)
from account.models import Account, AccountType
from transaction.models import Category, CategoryGroup

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
