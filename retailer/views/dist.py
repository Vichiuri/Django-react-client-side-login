from django.shortcuts import render
from django.core.paginator import Paginator

from ..serializers import DistributorSerializer
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from distributor.models.netbot import Distributor
from distributor.models import DistEmailSettings
from retailer.serializers import RetailerDistributorSerializer, RetailerUserSerializer
import json
from distributor.commons import send_dist_email, send_html_email

class RetailerDistApi(generics.RetrieveAPIView):
    """
    Change retailers current distributor and fetch distributor details
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        user = self.request.user
        retailer = user.retailer

        return Response({
            'distributors':  RetailerDistributorSerializer(retailer.distributors, many=True).data,
        })

    def patch(self, request):
        user = self.request.user
        retail_user = user.user_retailer
        json_data = json.loads(request.body)

        distributor = Distributor.objects.get(id=json_data['id'])
        retail_user.default_distributor = distributor
        retail_user.save()

        return Response({
            'message': "Retailer has been changed",
            'account': RetailerUserSerializer(retail_user, context=self.get_serializer_context()).data,
        })

class RetailerDistributorApi(generics.RetrieveAPIView):
    """
    View distributor message and send 
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        user = self.request.user
        distributor_id = self.request.query_params.get("distributor_id")

        distributor = Distributor.objects.get(id=distributor_id)

        return Response({
            'distributor': DistributorSerializer(distributor).data,
        })

    def post(self, request):
        json_data = json.loads(request.body)

        distributor = Distributor.objects.get(id=json_data.get('distributor'))
        email_context = {"name": json_data.get('name', ''), "phone": json_data.get('phone', ''), "email": json_data.get('email', ''),
                                'message': json_data.get('message', '') }

        if distributor and distributor.dist_email_settings:
            send_dist_email(distributor=distributor, template_name= "emails/contact_message_email.html" , to_emails=[distributor.email],
                subject="Contact Us Message", context_dict=email_context)
        else:
            send_html_email([distributor.email, ], 'Contact Us Message', 'emails/contact_message_email.html', email_context)

        return Response({
            'message': "Message has been sent thank you for your feedback"
        })