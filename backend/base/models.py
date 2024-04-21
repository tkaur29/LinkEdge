from django.db import models
from django.contrib.auth.models import AbstractUser

class WholeSaler(models.Model):
    name = models.CharField(max_length = 50, blank = True, null = True, unique = True)
    phone = models.CharField(max_length = 50, blank = True, null = True, unique = True)
    email = models.EmailField(('email address'), unique = True)
    
class Retailer(models.Model):
    name = models.CharField(max_length = 50, blank = True, null = True, unique = True)
    phone = models.CharField(max_length = 50, blank = True, null = True, unique = True)
    email = models.EmailField(('email address'), unique = True)

class Product(models.Model):
    name = models.CharField(max_length=50,blank=False,unique=True)
    cost_price = models.IntegerField()
    selling_price = models.IntegerField()
    wholesaler = models.ForeignKey(WholeSaler,on_delete=models.CASCADE)

class Order(models.Model):
    wholesaler_id = models.ForeignKey(WholeSaler,related_name="orderedTo",on_delete=models.CASCADE)
    retailer_id = models.ForeignKey(Retailer,related_name="orderedBy",on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, through='OrderItem')
    date = models.DateTimeField(auto_now=True)
    STATUS_CHOICES = [
        ('P', 'Pending'),
        ('S', 'Shipped'),
        ('D', 'Delivered'),
    ]
    status = models.CharField(max_length=1, choices=STATUS_CHOICES)
    
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()