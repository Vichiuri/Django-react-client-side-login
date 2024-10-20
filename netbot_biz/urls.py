"""netbot_biz URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from netbot_biz import settings

# import notifications.urls

handler404 = 'frontend.views.handler404'
handler500 = 'frontend.views.handler500'
urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('accounts/', include("netbotAuth.urls")),
    # # path('authv/', include('django.contrib.auth.urls')),
    # path('', include("distributor.urls")),
    path('', include("retailer.urls")),
    # path('', include('frontend.urls')),
    # path('mobile/', include('mobile_retailer.urls')),
    # path('view/', include('retailerview.urls'))
    # path('inbox/notifications/', include(notifications.urls, namespace='notifications')),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
