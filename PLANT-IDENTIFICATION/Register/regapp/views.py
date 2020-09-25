from django.contrib.auth.models import User
from django.contrib import messages
from django.shortcuts import render, redirect
from django.contrib import auth
from django.http import HttpResponse
# Create your views here.
def signup(request):
    return render(request,'regpage.html',{'link':'http://127.0.0.1:8000/login'})
def login(request):
    return  render(request,'loginpage.html')
def firstpage(request):
    if request.method=='POST':
       email=request.POST['email']
       username = request. POST['username']
       password = request.POST['pass']
       if User.objects.filter(username=username).exists():
              messages.info(request, 'Username is taken...Try another one')
              return redirect('/')
       else:
          x=User.objects.create_user(email=email,username=username,password=password)
          x.save()
          print("Succesfully Register")
          return  render(request,'homepage.html',{'name':username})
def loginfirstpage(request):
    if request.method=='POST':
      username1 = request. POST['username']
      password1 = request.POST['pass']

    user=auth.authenticate(username=username1,password=password1)
    if user is None:
        messages.info(request,'Invalid credentials')
        return redirect('login')
    else:
        return  render(request,'homepage.html',{'name':username1})