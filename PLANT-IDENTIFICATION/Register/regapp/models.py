from django.db import models

# Create your models here.
class userdetails(models.Model):
    Email=models.EmailField()
    Username=models.CharField(max_length=20)
    Password=models.CharField(max_length=8)