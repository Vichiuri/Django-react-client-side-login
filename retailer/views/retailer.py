from django.db.models import Q
from django.shortcuts import render
from django.core.paginator import Paginator

from ..serializers import   RetailerUserSerializer, PriceOfferSerializer, PCategorySerializer, ProductSerializer, RetailerDistributorSerializer, RetailerProductsSerializer, PriceOfferDetailSerializer
from mobile_retailer.m_serializers.retailer_data import  MobileBannerSerializer
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from mobile_retailer.models.retailerM import RetailerUser
from distributor.models import PCategory, PriceOffer, MobileBanner, Product
from django.utils import timezone
import json
from distributor.models.netbot import Distributor
from _datetime import datetime
from distributor.models.distributor import PriceList
from retailer.serializers import PriceListProductSerializer

# Create your views here.
class RetailerDashBoardApi(generics.RetrieveAPIView):
    """
    Fetch Retailer website dahsboard data...
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        user = self.request.user
        distributor_id = self.request.query_params.get("distributor_id")
        retailer_user = RetailerUser.objects.filter(user=user).first()

        today = timezone.now()
        categories = PCategory.objects.filter(distributor__id=distributor_id).order_by('-id')[:8]
        offers = PriceOffer.objects.filter(distributor__id=distributor_id, date_from__lte=today, date_to__gt=today).order_by('-id')[:8]
        banners = MobileBanner.objects.filter(distributor__id=distributor_id).order_by('-position')

        return Response({
            'categories': PCategorySerializer(categories, many=True).data,
            'offers': PriceOfferSerializer(offers, many=True).data,
            'banners': MobileBannerSerializer(banners, many=True).data
        })

class RetailerProductCategoryApi(generics.RetrieveAPIView):
    """
    Fetch view products for retailers based distributor
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        user = self.request.user
        retail_user = user.user_retailer
        category_id = self.request.query_params.get("category_id")

        products = Product.objects.filter(category__id=category_id, active=True).order_by('-is_new_arrival','-id')[:8]

        return Response({
            "products": RetailerProductsSerializer(products, many=True, context={'retail_user': retail_user}).data,
        })

class RetailerNewArriValProductsApi(generics.RetrieveAPIView):
    """
    Fetch New arrival products for retailer based on distributor
    """
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        retail_user = user.user_retailer
        distributor_id = self.request.query_params.get("distributor_id")
        retailer_user = RetailerUser.objects.filter(user=user).first()

        products = Product.objects.filter(distributor__id=distributor_id, active=True, is_new_arrival=True).order_by('-is_new_arrival','-when_created','-id')[:8]

        return Response({
            "products": RetailerProductsSerializer(products, many=True,context={'retail_user': retail_user}).data,
        })

class RetailerProductDetailsApi(generics.RetrieveAPIView):
    """
    Fetch Retailer product details view
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    def get(self, request):
        user = self.request.user
        retail_user = user.user_retailer

        product_id = self.request.query_params.get("product_id")
        product = Product.objects.get(id=product_id)
        related_products = Product.objects.filter(category=product.category, active=True).order_by('-is_new_arrival','-when_created','-id').exclude(id=product.id)[:8]

        return Response({
            'detail': RetailerProductsSerializer(product, many=False, context={'retail_user': retail_user}).data,
            'related_products': RetailerProductsSerializer(related_products, many=True, context={'retail_user': retail_user}).data,
        })

class RetailerFetchProductsApi(generics.RetrieveAPIView):
    """
    Fetch dashboad products per category and distributor
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request) :
        user = self.request.user
        retail_user = user.user_retailer

        distributor_id = self.request.query_params.get("distributor_id")
        category_id = self.request.query_params.get("category_id")
        price_range = self.request.query_params.get("price_range")
        offset = 25
        queryset = Product.objects.filter(distributor__id=distributor_id, active=True).order_by('-is_new_arrival','-id')

        if category_id:
            cat_prod = queryset.filter(category__id=category_id)
            queryset = cat_prod

        if price_range:
            range_prod = queryset.filter(price__gte=price_range)
            queryset = range_prod

        paginator = Paginator(queryset, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "products": RetailerProductsSerializer(pageList, many=True, context={'retail_user': retail_user}).data,
            'last_page': last_page,
        })

class RetailerSearchProductApi(generics.RetrieveAPIView):
    """
    Search for retailer products view
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        user = self.request.user
        retail_user = user.user_retailer

        distributor_id = self.request.query_params.get("distributor_id")
        category_id = self.request.query_params.get("category_id")
        query = self.request.query_params.get("query")
        price_range = self.request.query_params.get("price_range")
        offset = 25
        queryset = Product.objects.filter(distributor__id=distributor_id, active=True).order_by('-is_new_arrival','-id')

        if category_id:
            query_cat = queryset.filter(category__id=category_id)
            queryset = query_cat

        if query:
            query_prod = queryset.filter(Q(name__icontains=query) |
                                   Q(brand__icontains=query) | Q(size__icontains=query) | 
                                   Q(category__name__icontains=query) |
                                   Q(units__name__icontains=query) | Q(units__symbol__icontains=query) |
                                   Q(colors__label__icontains=query) | Q(colors__color__icontains=query)).distinct()
            queryset = query_prod

        if price_range:
            range_prod = queryset.filter(price__gte=price_range)
            queryset = range_prod

        paginator = Paginator(queryset, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "products": RetailerProductsSerializer(pageList, many=True, context={'retail_user': retail_user}).data,
            'last_page': last_page,
        })

class RetailerFetchCategoryApi(generics.RetrieveAPIView):
    """
    Fetch dashboard categories views
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        distributor_id = self.request.query_params.get("distributor_id")
        offset = 10
        
        categories = PCategory.objects.filter(distributor__id=distributor_id).order_by('-id')
        paginator = Paginator(categories, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
         'categories': PCategorySerializer(pageList, many=True).data,
         'last_page': last_page
        })

class RetailerFetchSubCategoriesApi(generics.RetrieveAPIView):
    """
    Fetch subcategories for shop view
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        category_id = self.request.query_params.get("category_id")
        offset = 10

        categories = PCategory.objects.filter(parent_category__id=category_id).order_by('-id')
        paginator = Paginator(categories, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
         'sub_categories': PCategorySerializer(pageList, many=True).data,
         'last_page': last_page
        })

class RetailerFavouriteProductsApi(generics.RetrieveAPIView):
    """
    View retailer favourite products and manage them
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        user = request.user
        offset =  25
        retailer_user = user.user_retailer

        queryset = retailer_user.favorite_products.all()
        paginator = Paginator(queryset, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'fav_prods': RetailerProductsSerializer(pageList, many=True, context={'retail_user': retailer_user}).data, 
            'last_page': last_page,
        })

    def post(self, request):
        user = request.user
        retailer_user = user.user_retailer

        json_data = json.loads(request.body)
        product = Product.objects.get(id=json_data.get('product_id'))
        retailer_user.favorite_products.add(product)

        return Response({
            'message': "Product has been added to favourites",
            'fav_prod': RetailerProductsSerializer(product, context={'retail_user': retailer_user}).data, 
        })

    def patch(self, request):
        user = request.user
        retailer_user = user.user_retailer

        json_data = json.loads(request.body)
        product = Product.objects.get(id=json_data.get('product_id'))
        retailer_user.favorite_products.remove(product)

        return Response({
            'message': "Product has been removed to favourites",
        })

    def delete(self, request):
        user = request.user
        retailer_user = user.user_retailer
        retailer_user.favorite_products.clear()

        return Response({
            'message': "Cleared items from favourites"
        })

class RetailerProductPriceSlabsApi(generics.RetrieveAPIView):
    """
    View available retailer price lists per product
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        product_id = self.request.query_params.get("product_id")
        variation_id = self.request.query_params.get("variation_id")
        today = datetime.today()
        date_today = today.date()
        offset = 10

        query= Q(Q(product__id=product_id) & Q(date_from__lte=date_today) )
        if variation_id:
            query.add(Q(variation__id=variation_id), Q.AND)


        queryset = PriceList.objects.filter(query).order_by('min_amount')
        paginator = Paginator(queryset, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'price_list': PriceListProductSerializer(pageList, many=True).data,
            'last_page': last_page,
        })

class RetailerViewOffersApi(generics.RetrieveAPIView):
    """
    View Available retailer offers and prices
    """
    def get(self, request):
        distributor_id = self.request.query_params.get("distributor_id")
        today = timezone.now()
        offset = 25

        queryset = PriceOffer.objects.filter(distributor__id=distributor_id, date_from__lte=today, date_to__gt=today).order_by('-id')
        paginator = Paginator(queryset, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'offers': PriceOfferSerializer(pageList, many=True).data,
            'last_page': last_page
        })

class RetailerOfferDetailApi(generics.RetrieveAPIView):
    """
    VIew Retailers offer details and specifications
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        offer_id = self.request.query_params.get("offer_id")
        offer = PriceOffer.objects.get(id=offer_id)

        return Response({
            'offer':  PriceOfferDetailSerializer(offer, many=False).data,
        })