from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import login,logout, authenticate
from django.shortcuts import render, redirect
from django.contrib import auth
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.contrib.auth import login,logout, authenticate
from django.contrib.auth.decorators import login_required

from django.http import HttpResponse

# Create your views here.
def signup(request):
    return render(request,'regpage.html')
def login(request):
    return  render(request,'loginpage.html')


def firstpage(request):
    if request.method=='POST':
       email=request.POST['email']
       username = request.POST['username']
       password = request.POST['pass']
       if User.objects.filter(email=email).exists():
              messages.info(request, 'Email is taken...Try another one')
              return redirect('/')
       else:
          x=User.objects.create_user(email=email,username=username,password=password)
          x.save()
          print("Succesfully Register")

          dictt = {'name': username}
          return  render(request,'index.html',dictt)
    else:
        return redirect('/')


def loginfirstpage(request):
    username1 = ""
    password1 = ""
    if request.method=='POST':
      username1 = request. POST['username']
      password1 = request.POST['pass']
    user=auth.authenticate(username=username1,password=password1)
    if user is None:
        messages.info(request,'Invalid credentials')
        return redirect('login')
    else:
        dictt = {'name': username1}
        return  render(request,'index.html',dictt)

def logoutpage(request):
    if (request.method == "POST"):
        logout(request)
    return redirect("/")