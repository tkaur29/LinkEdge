from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from ..models import Product
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]
    return Response(routes)


def addProduct(request):
        if  request.method == "POST":
            name = request.POST["name"]
            cost_price = request.POST["cost_price"]
            sales_price= request.POST["sales_price"]
            user = request.user
            product = Product(**{"name":name,"cost_price":int(cost_price),"sales_price":int(sales_price),"WholeSaler":user})
            product.save()
            return Response(status=200)
        else:
            return Response(status=403)
             