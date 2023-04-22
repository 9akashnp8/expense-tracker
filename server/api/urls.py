# DRF Imports
from rest_framework.routers import DefaultRouter

# Internal App Imports
from .views import (
    AccountViewSet,
    AccountTypeViewSet,
    CategoryViewSet,
    CategoryGroupViewSet,
    LabelViewSet,
    TransactionViewSet
)

# Routes go here
router = DefaultRouter()

router.register(r'account', AccountViewSet)
router.register(r'account-type', AccountTypeViewSet)
router.register(r'category', CategoryViewSet)
router.register(r'category-group', CategoryGroupViewSet)
router.register(r'label', LabelViewSet)
router.register(r'transaction', TransactionViewSet)

urlpatterns = router.urls