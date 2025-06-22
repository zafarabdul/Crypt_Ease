from django.shortcuts import render,HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.
@api_view(['GET'])
def index(request):
    if( request.method == "GET"):
        return Response({
            'a':'a',
            'b':'b'
        })
    else :
        return HttpResponse('<h1>Zafar</h1>')