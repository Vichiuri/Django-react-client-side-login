from django.db.models import Count, Sum
from django.core.paginator import Paginator
from django.utils import timezone

from ..serializers import ProductSerializer, RetailerSerializer, DistNotificationsSeriliazer, \
    RetailerStaticsViewSerializer
from distributor.models import DistUsers, Product, Retailer, RetailOrders, DistNotifications, DistEmailSettings, \
    Product, SalesMan, DistRegion, Retailer, PriceLevel, PriceOffer
from rest_framework import permissions, generics, status
from rest_framework.response import Response
from distributor.commons import checkCurrentProgress


class DashBoardApi(generics.RetrieveAPIView):
    """
    Fetch statics for presenting on dashboard for both graphs and card views
    """
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        today = timezone.now()
        print(today.date())

        product_count = Product.objects.filter(distributor=distributor).count()
        orders = RetailOrders.objects.filter(distributor=distributor)
        total_orders = orders.count()
        complete_orders = orders.filter(when_approved__isnull=False)
        monthly_complete_count = complete_orders.filter(when_approved__month=today.month).count()
        complete_orders_count = complete_orders.count()
        retailers_count = Retailer.objects.filter(distributors__in=[distributor]).count()
        revenue = complete_orders.aggregate(Sum("total_cost")).get('total_cost__sum', 0)
        monthly_revenue = complete_orders.filter(when_approved__month=today.month).aggregate(Sum("total_cost")).get(
            'total_cost__sum', 0)
        retailers = Retailer.objects.filter(distributors__in=[distributor])
        monthly_retailer_count = retailers.filter(when_created__month=today.month).count()
        view_retailer = retailers.annotate(
            count=Count("retailer_ord_view__when_approved")).order_by('-count')[:5]
        products = Product.objects.filter(distributor=distributor).annotate(count=Sum('order_product__qty')).order_by(
            '-count')[:5]
        offers = PriceOffer.objects.filter(distributor=distributor, date_from__lte=today, date_to__gte=today).count()
        salesmen = SalesMan.objects.filter(distributor=distributor).count()

        dashBoardCount = {
            "product_count": product_count,
            "total_orders": total_orders,
            "complete_orders": complete_orders_count,
            "retailers_count": retailers_count,
            "revenue": revenue,
            'offers': offers,
            'salesmen': salesmen,
            'monthly_revenue': monthly_revenue, 'monthly_retailer': monthly_retailer_count,
            'monthly_complete_order': monthly_complete_count
        }

        return Response({
            "dashBoardCount": dashBoardCount,
            "view_retailers": RetailerStaticsViewSerializer(view_retailer, many=True).data,
            'view_products': ProductSerializer(products, many=True).data,
        })


class DistNotificationApi(generics.RetrieveAPIView):
    """
    Fetch distributor notifications and messsages
    """
    serializer_class = DistNotificationsSeriliazer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        querySet = DistNotifications.objects.filter(distributor=distributor, un_seen_by__in=[distUser]).order_by('-id')
        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'notifications': DistNotificationsSeriliazer(pageList, many=True, context={'dist_id': distUser.id}).data,
            'last_page': last_page,
        })


class ViewDistNotificationApi(generics.RetrieveAPIView):
    """
    View individual distributor notifications
    """
    serializer_class = DistNotificationsSeriliazer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()

        notification_id = self.request.query_params.get("notification_id")
        dist_notification = DistNotifications.objects.get(id=notification_id)
        dist_notification.seen_by.add(distUser)
        dist_notification.save()

        return Response({
            'notification': DistNotificationsSeriliazer(dist_notification, many=False,
                                                        context={'dist_id': distUser.id}).data,
        })


class CheckDashboardProgressApi(generics.RetrieveAPIView):
    """
    Fetch distributor fill out progress
    """
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        view_complete = checkCurrentProgress(distributor)

        return Response({
            "view_complete": view_complete
        })
