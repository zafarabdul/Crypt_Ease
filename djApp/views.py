from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Data
from .serializer import DataSerial
def des():
    ret=""
    return ret
@api_view(['GET', 'POST'])
def index(request):
    if request.method == "POST":
        serializer = DataSerial(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': 'Saved', 'error': "1"})
        else:
            return Response({'data': 'Already Existed', 'error': "0"}, status=400)

    elif request.method == "GET":
        idGot = request.query_params.get('id')
        key = request.query_params.get('secKey')
        ret=''
        err='Data received successfully'
        # Safely extract the data
        users=Data.objects.filter(id=idGot,secKey=key).first()
        if(users):
            ret=users.eMessage
            err=0
        else:
            ret="Not Found"
            err=1
        response_data = {
            'data': ret,
            'error': err,
        }
        return Response(response_data)
