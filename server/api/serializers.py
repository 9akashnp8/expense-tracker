# DRF Imports
from rest_framework.serializers import ModelSerializer

# Internal App Imports
from account.models import Account, AccountType
from transaction.models import Category, CategoryGroup

# 'account' app serializers
class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'

class AccountTypeSerializer(ModelSerializer):
    class Meta:
        model = AccountType
        fields = '__all__'

# 'transaction' app serializers
class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class CategoryGroupSerializer(ModelSerializer):
    class Meta:
        model = CategoryGroup
        fields = '__all__'