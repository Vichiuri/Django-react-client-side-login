from django.shortcuts import render
from django.contrib.auth import authenticate
from distributor.models import DistUsers, NetBotUser
from netbotAuth.models import  User

from ..serializers import  LoginSerializer, UserSerializer, RetailerUserSerializer
from knox.models import AuthToken
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from distributor.commons import calculateSubscription, send_html_email, customEncrypt, customDecrypt, generateRandomString
import json
from mobile_retailer.models.retailerM import RetailerUser
from _datetime import datetime, timedelta
from distributor.models.distributor import RetailerProfile
from geopy.geocoders import Nominatim
from distributor.models.netbot import Distributor


class RetailerUserApi(generics.RetrieveAPIView):
    """
    Retailer Website fetch info and refresh token view
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = RetailerUserSerializer

    def get(self, request):
        user = self.request.user
        account = RetailerUser.objects.filter(user=user).first()

        if account:
            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data,
                'account': RetailerUserSerializer(account, context=self.get_serializer_context()).data,
            })

        else:
            return Response({
                "message": "It would appear you are not a retailer"
            }, status=status.HTTP_403_FORBIDDEN)

    def put(self, request):
        user = self.request.user
        retailer = user.retailer

        formData = request.POST.copy()
        if formData.get('new_password'):
            if formData.get('new_password') == formData['confirm_password']:
                authUser = authenticate(request, email=user.email, password=formData['old_password'])
                if authUser:
                    authUser.set_password(formData['new_password'])
                    authUser.save()
                else:
                    return Response({
                        'error': "Current password does not match"
                    }, status=status.HTTP_403_FORBIDDEN)
            else:
                return Response({
                    'error': "New password and confirm password do not match"
                }, status=status.HTTP_403_FORBIDDEN)
        
        retailer.name = formData.get('name')
        retailer.phone = formData.get('phone')
        if request.FILES.get('photo'):
            retailer.pic.delete(save=False)
            retailer.pic = request.FILES.get('photo')

        retailer.save()

        account = RetailerUser.objects.filter(user=user).first()
        return Response({
            'message': "Profile has been updated",
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            'account': RetailerUserSerializer(account, context=self.get_serializer_context()).data,
        })

    def patch(self, request):
        try:
            user = request.user
            retailer = user.retailer
            json_data = json.loads(request.body)
            distributor_id = json_data.get('distributor_id')

            retailer_profile = RetailerProfile.objects.filter(retailer=retailer).first()
            if distributor_id:
                distributor = Distributor.objects.get(id=distributor_id)
                retailer_profile = RetailerProfile.objects.filter(retailer=retailer, distributor=distributor).first()

            if retailer_profile:
                retailer_profile.latitude = json_data.get('latitude')
                retailer_profile.longitude = json_data.get('longitude')
                geolocator = Nominatim(user_agent="Biz App")
                location = geolocator.reverse(""+str(json_data.get('latitude'))+"," +str(json_data.get('longitude'))+"")

                if location.raw.get('address'):
                    address = location.raw.get('address')
                    retailer_profile.county = address.get('state')
                    retailer_profile.world_country = address.get('country')

                retailer_profile.save()

                return Response({
                    'message': "Location has been updated",
                })
            else:
                return Response({
                    'message': "it would appear you are not a retailer"
                },status=status.HTTP_403_FORBIDDEN)
        except Exception as e:
            return Response({
                'message': "Something went wrong"
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class RetailerLoginApi(generics.GenericAPIView):
    """
    Login credentials for retailer on the website
    """
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        print('here')
        serializer = self.get_serializer(data=request.data)
 
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data
        print('user',user)
        account = RetailerUser.objects.filter(user=user).first()
        print('user',user)

        if account:
            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data,
                'account': RetailerUserSerializer(account, context=self.get_serializer_context()).data,
                "token": AuthToken.objects.create(user)[1]
            })

        else:
            return Response({
                "message": "It would appear you are not a retailer"
            }, status=status.HTTP_403_FORBIDDEN)

class RetailerForgotPasswordApi(generics.GenericAPIView):
    """
    Forgot password api for retailers
    """
    def get(self, request):
        token = self.request.query_params.get("token")
        encoded_email =  self.request.query_params.get("u")
        decoded_email = customDecrypt(encoded_email)

        querySet = User.objects.filter(email=decoded_email, reset_token=token)

        if querySet.first():
            user = querySet.first()
            timeStamp = float(token[25:])
            expiration_date =  datetime.fromtimestamp(timeStamp)
    
            if expiration_date.replace(tzinfo=None) > datetime.now().replace(tzinfo=None):
                reset_context = {
                    'email': user.email,
                    'token': token,
                }
                return render(request, 'retailer_forgot_password.html', context=reset_context)

        return render(request, 'email_expired.html')

    def post(self, request):
        json_data = json.loads(request.body)
        querySet = User.objects.filter(email=json_data['email'])

        if querySet.first():
            user = querySet.first()

            encoded_email = customEncrypt(user.email)
            
            token = generateRandomString(25)

            current_time = datetime.timestamp(datetime.now() + timedelta(days=1))
            complete_token = str(token)+str(current_time)

            user.reset_token = complete_token
            user.save()
            
            reset_url = str(request.get_host())+'/api/auth/retailer_forgot/?u='+encoded_email+'&token='+complete_token

            email_context = {
                'reset_url': reset_url,
            }
            
            email_sent = send_html_email([user.email, ], "Forgot Password",
                                "emails/forgot_password_template.html", context=email_context
            )
            
            if email_sent:
                return Response({
                    'message': "A link to reset was sent please check your email"
                })
            else:
                return Response({
                    'error': "Something was not configured well try again"
                },status=status.HTTP_400_BAD_REQUEST)

        else:
           return Response({
                    'message': "A link to reset was sent please check your email"
             })

    def put(self, request):
        formData = request.POST.copy()
        token = formData['reset_token']

        querySet = User.objects.filter(email=formData['email'], reset_token=token)
        if querySet.first():
            user = querySet.first()
            timeStamp = float(token[25:])
            expiration_date =  datetime.fromtimestamp(timeStamp)

            if expiration_date.replace(tzinfo=None) > datetime.now().replace(tzinfo=None):
                if formData['new_password'] == formData['confirm_password']:
                    user.set_password(formData['new_password'])
                    user.reset_token = ''
                    user.save()

                    return Response({
                        'message': "Password has been reset"
                    })
                else:
                    return Response({'error': "New password does not match Confirm Password"}, status=status.HTTP_400_BAD_REQUEST)

        return render(request, 'email_expired.html')