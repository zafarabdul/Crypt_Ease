from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])
def index(request):
    if request.method == "GET":
        return Response({'a': 'a', 'b': 'b'})
    else:
        # get values safely from POST body
        id = request.data.get('id')
        key = request.data.get('key')
        return Response({
            '0':'data'
        })
