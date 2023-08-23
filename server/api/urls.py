# Django Imports
from django.urls import path

# DRF Imports
from rest_framework.routers import DefaultRouter

# Internal App Imports
from .views import (
    AccountViewSet,
    AccountTypeViewSet,
    CategoryViewSet,
    CategoryGroupViewSet,
    LabelViewSet,
    TransactionViewSet,
    CategoryChart
)

# Routes go here
router = DefaultRouter()

router.register(r'account', AccountViewSet)
router.register(r'account-type', AccountTypeViewSet)
router.register(r'category', CategoryViewSet)
router.register(r'category-group', CategoryGroupViewSet)
router.register(r'label', LabelViewSet)
router.register(r'transaction', TransactionViewSet)

urlpatterns = [
    path('category-chart/', CategoryChart.as_view(), name='category_chart'),
] + router.urls