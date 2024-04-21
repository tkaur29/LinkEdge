from django.contrib import admin

from .models import WholeSaler,Retailer,Order,Product,OrderItem

admin.site.register(WholeSaler)
admin.site.register(Retailer)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(Product)