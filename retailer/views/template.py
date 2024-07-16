from django.shortcuts import render

def index(request):
     """
     Entery view for retailer website
     """
     return render(request, 'retailer_view.html')