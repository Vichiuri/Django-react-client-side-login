import json

from distributor import commons
from distributor.models import MobileBanner, PCategory, PriceOffer, Product
from distributor.models.distributor import (Delivery, DistOrder,
                                            RetailerProfile, RetailOrders,VariationOptions,
                                            SalesMan)
from django.core.paginator import Paginator
from django.db.models import ExpressionWrapper, F, FloatField, Sum, Q
from django.shortcuts import render
from django.utils import timezone
from djmoney.models.fields import MoneyField
from djmoney.money import Money
from mobile_retailer.m_serializers.retailer_data import MobileBannerSerializer
from mobile_retailer.models.retailerM import (MobileOrder, RetailerCart,
                                              RetailerUser)
from mobile_retailer.notification import order_notification
from rest_framework import generics, permissions, status, viewsets
from rest_framework.response import Response

from retailer.serializers import (DistForRetOrderSerializer,
                                  DistOrderSerializer, MobileOrderSerializer,
                                  RetailerViewOrdersSerializer,
                                  RetailOrdersSerializer)

from ..serializers import (PCategorySerializer, PriceOfferSerializer,
                           ProductSerializer, RetailerCartSerializer,
                           RetailerUserSerializer)


class RetailerCartApi(generics.RetrieveAPIView):
    """
    View Retailer cart api and add items to cart
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        user = request.user
        retailer = user.retailer
        
        cart = RetailerCart.objects.filter(retailer=retailer).first()


        if cart:
            total = 0
            v_total = cart.orders.aggregate(total_sum=Sum('order_price'))
            if v_total['total_sum']:
                total = v_total['total_sum']
            return Response({
                'cart': RetailerCartSerializer(cart).data,
                'total': total
            })
        else:
            cart = RetailerCart(retailer=retailer)
            cart.save()

            return Response({
                'cart': RetailerCartSerializer(cart).data,
                'total': 0
            })

    def post(self, request):
        user = request.user
        retailer = user.retailer
        json_data = json.loads(request.body)

        cart = RetailerCart.objects.filter(retailer=retailer).first()
        qty = json_data.get('qty')
        variant_id = json_data.get('variant_id')
        product = Product.objects.get(id=json_data.get('product_id'))

        query = Q(Q(product=product) & Q(retailer=retailer) & Q(placed=False) & Q(applied_offer__isnull=True))

        if variant_id:
            variant=VariationOptions.objects.get(id=variant_id) 
            query.add(Q(variations=variant), Q.AND)
                        

        order = MobileOrder.objects.filter(query).first()
        
        if order:
            
            if json_data.get('new_qty') and json_data.get('new_qty'):

                order.qty = float(json_data.get('new_qty'))
            elif json_data.get('new_qty') and  not json_data.get('new_qty'):
                order.qty += float(json_data.get('new_qty'))
            else:
                order.qty += float(qty)
            if variant_id:
                variant=VariationOptions.objects.get(id=variant_id)
                product_price= commons.retailer_price_list_product_price(product.distributor, retailer, product, order.qty,variant)
                if(isinstance(product_price,float)):
                    order.per_price = float(product_price)
                else:
                    
                    order.per_price = float(product_price.amount)
                # product_price =variant.selling_price
                # order.per_price = float(product_price)
                          
            else:
                
                product_price = commons.retailer_price_list_product_price(product.distributor, retailer, product, order.qty)
                if(isinstance(product_price,float)):
                    order.per_price = float(product_price)
                else:
                    
                    order.per_price = float(product_price.amount)

            print('ordeer-<',order.qty)

            
            
            order_price = product_price * order.qty
            order.order_price = order_price        
            order.placed = False
            order.save()
            if json_data.get("price_offers"):
                offers = json_data.get("price_offers")
                for offer in offers:
                    price_offer = PriceOffer.objects.get(id=offer)
                    order.price_offers.add(price_offer)
                    if price_offer.scheme == "BnXy%O":
                        percDisc = 100 - price_offer.y_amt
                        order.order_price = float(order_price) * (percDisc / 100)

        else:    
            if variant_id:
                variant=VariationOptions.objects.get(id=variant_id)
                order = MobileOrder(retailer=retailer, product=product, variations=variant,distributor=product.distributor, qty=qty )
            else:
                order = MobileOrder(retailer=retailer, product=product, distributor=product.distributor, qty=qty )
            if json_data.get('new_qty'):
                order.qty = json_data.get('new_qty')
            else:
                order.qty= qty

            if variant_id:
                variant=VariationOptions.objects.get(id=variant_id)
                # product_price =variant.selling_price
                # order.per_price = float(variant.selling_price)
                product_price = commons.retailer_price_list_product_price(product.distributor, retailer, product, order.qty,variant)
                if(isinstance(product_price,float)):
                    order.per_price = float(product_price)
                else:
                    
                    order.per_price = float(product_price.amount)
                order.per_price = float(product_price)
                
                          
            else:
                product_price = commons.retailer_price_list_product_price(product.distributor, retailer, product, order.qty)
                if(isinstance(product_price,float)):
                    order.per_price = float(product_price)
                else:
                    
                    order.per_price = float(product_price.amount)
  

            order_price = product_price * float(order.qty)
            order.order_price = order_price
            order.placed = False
            order.save()
            if json_data.get("price_offers"):
                offers = json_data.get("price_offers")
                for offer in offers:
                    price_offer = PriceOffer.objects.get(id=offer)
                    order.price_offers.add(price_offer)
                    if price_offer.scheme == "BnXy%O":
                        percDisc = 100 - price_offer.y_amt
                        order.order_price = float(order_price) * (percDisc / 100)
        print('order->',order)
        cart.orders.add(order)
        print(cart.orders.all())
        cart.save()

        total = 0
        v_total = cart.orders.aggregate(total_sum=Sum(F('order_price',), output_field=MoneyField()))
        if v_total.get('total_sum'):
            total = str(Money(str(v_total.get('total_sum', 0)),order.order_price.currency))

        return Response({
            'message': "Cart has been updated",
            "order": MobileOrderSerializer(order, many=False).data,
            'total': total
        },status=status.HTTP_201_CREATED)

    def put(self, request):
        user = request.user
        retailer = user.user_retailer.retailer
        cart = RetailerCart.objects.filter(retailer=retailer).first()
        orders = cart.orders.all()
        for order in orders:
            currency = order.order_price.currency
            if order.offer_id:
                if order.offer_id > 0:
                    MobileOrder.objects.filter(offer_id=order.offer_id).exclude(
                        id=order.id, order_price=0).all().delete()

            order.delete()

        cart.orders.clear()

        return Response({
            'message': "Products cleared from cart",
            'total': 0
        })

    def delete(self, request):
        user = request.user
        retailer = user.user_retailer.retailer
        order_id = self.request.query_params.get("order_id")

        cart = RetailerCart.objects.filter(retailer=retailer).first()
        order = MobileOrder.objects.get(id=order_id)
        currency = order.order_price.currency
        if order.offer_id:
                if order.offer_id > 0:
                    MobileOrder.objects.filter(offer_id=order.offer_id).exclude(
                        id=order.id, order_price=0).all().delete()

        order.delete()

        total = 0
        v_total = cart.orders.aggregate(total_sum=Sum(F('order_price',), output_field=MoneyField()))
        if v_total['total_sum']:
            total = str(Money(str(v_total['total_sum']),currency))

        return Response({
            'message': "Product has been deleted from cart",
            'total': total
        }, status=status.HTTP_204_NO_CONTENT)


class ViewRetailerOrdersApi(generics.RetrieveAPIView):
    """
    Create retailer orders viewa
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        user = request.user
        retailer = user.retailer
        offset = 25

        querySet = RetailOrders.objects.filter(retailer=retailer).order_by('-id')
        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'orders': RetailerViewOrdersSerializer(pageList, many=True).data,
            'last_page': last_page
        })

    def post(self, request):
        user = request.user
        retailer_user = request.user.user_retailer
        retailer = user.retailer
        distributors = retailer.distributors.all()
        discount_amount= 1
        percentage_amount=1
        
        retailer_cart = RetailerCart.objects.filter(retailer=retailer).first()
        if retailer_cart is None or retailer_cart.orders.count() < 1:
            return Response({"message": "No Products In Cart"}, status=status.HTTP_400_BAD_REQUEST)
       
        for dist in distributors:
            mobile_orders = retailer_cart.orders.filter(distributor=dist).all()
            print(mobile_orders)
            if mobile_orders.count() >= 1:
                retail_order = RetailOrders()
                retail_order.distributor = dist
                retail_order.retailer = retailer
                retail_order.status = "Pending"
                # retail_order.discount_amount =discount_amount
                # retail_order.percentage_discount  =discount_amount
    
                order_no = '#'
                retail_order.ref_number = order_no
                retail_order.salesman = SalesMan.objects.filter(distributor=dist).first()
                retail_order.save()
                print('after ret')
                for mobile_order in mobile_orders:
                    dist_order = DistOrder(discount_amount = discount_amount)
                    dist_order.order_price = mobile_order.order_price
                    dist_order.qty = mobile_order.qty
                    # dist_order.discount_amount = discount_amount
                    # dist_order.percentage_discount = discount_amount
                    dist_order.distributor = mobile_order.distributor
                    dist_order.product = mobile_order.product
                    dist_order.retailer = mobile_order.retailer
                    dist_order.per_price = mobile_order.per_price
                    dist_order.placed = True

                    dist_order.free_qty = mobile_order.free_qty
                    dist_order.total_qty = mobile_order.total_qty

                    dist_order.save()
          
                    for price_offer in mobile_order.price_offers.all():
                        dist_order.price_offers.add(price_offer)
                    retail_order.ret_orders.add(dist_order)
                    retail_order.total_cost = retail_order.total_cost + dist_order.order_price
                    mobile_order.delete()
                retail_order.when_placed = timezone.now()
                retail_order.salesman = RetailerProfile.objects.filter(retailer=retailer,
                                                                           distributor=dist).first().salesman
                retail_order.note = request.data['note']
                retail_order.save()
                

        retailer_cart.orders.clear()
         
        return Response({
            "message": "Order Placement Success"
            }, status=status.HTTP_201_CREATED)

    def put(self, request):
        json_data = json.loads(request.body)
        ret_order = RetailOrders.objects.get(id=json_data['order_id'])
        retailer = ret_order.retailer
        cart = RetailerCart.objects.filter(retailer=retailer).first()
        orders = ret_order.ret_orders.all()
        for order in orders:
            mobile_order = MobileOrder()
            mobile_order_ = MobileOrder.objects.filter(product=order.product, retailer=retailer,
                                                       placed=False).first()
            if mobile_order_ is not None:
                mobile_order = mobile_order_
            mobile_order.retailer = retailer
            mobile_order.product = order.product
            mobile_order.salesman = ret_order.salesman
            mobile_order.qty = order.qty
            price = commons.retailer_price_list_product_price(product=mobile_order.product,
                                                         distributor=mobile_order.product.distributor,
                                                         retailer=order.retailer,
                                                         qty=mobile_order.qty
                                                         ) * mobile_order.qty
            mobile_order.order_price = price
            mobile_order.distributor = order.distributor
            mobile_order.per_price = float(price.amount)
            mobile_order.total_qty = order.total_qty
            mobile_order.placed = False
            mobile_order.save()
            cart.orders.add(mobile_order)

        return Response({
            "message": "Re Order Success, Items Placed In Cart",
            'cart': RetailerCartSerializer(cart).data,
        })

    def patch(self, request):
        json_data = json.loads(request.body)
        ret_order = RetailOrders.objects.get(id=json_data['order_id'])
        ret_order.confirmed_delivery = True
        ret_order.save()
        delivery = Delivery.objects.filter(order=ret_order).first()

        delivery.confirmed = True
        delivery.save()

        return Response({
            'message': "Your Delivery has been confirmed",
            'order': RetailerViewOrdersSerializer(ret_order).data
        })

    def delete(self, request):
        try:
            order_id = self.request.query_params.get('order_id')
            ret_order = RetailOrders.objects.filter(id=order_id, status="Pending").first()
            if ret_order is None:
                return Response({"message": "Could Not Find The Order Status Might Have Changed"})
           
            ret_order.status = "CANCELED"
            ret_order.save()
            order_notification(ret_order, ret_order.status)
            
            return Response({
                "message": "Order Cancellation Success",
                'order': RetailerViewOrdersSerializer(ret_order).data}, status=200)
        except Exception as e:
            return Response({"message": "Order Cancel Request Error " + str(e)})

class ViewRetailDistOrderApi(generics.RetrieveAPIView):
    """
    View individual order and order details
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        ret_id = self.request.query_params.get("ret_id")
        order = RetailOrders.objects.get(id=ret_id)

        querySet = order.ret_orders.all()
        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages
# 
        return Response({
            'dist_orders': DistOrderSerializer(pageList, many=True).data,
            'last_page': last_page
        })
