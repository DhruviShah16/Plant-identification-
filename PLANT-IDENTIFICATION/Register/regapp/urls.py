from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.signup,name='sign up page'),
    path('login', views.login, name='login'),
    path('firstpage',views.firstpage,name='homepage'),
    path('loginfirstpage',views.loginfirstpage,name='loginhomepage'),
    path('logoutpage',views.logoutpage,name='logoutpage')
]