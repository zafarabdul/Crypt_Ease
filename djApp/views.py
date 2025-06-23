from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])
def index(request):
    if request.method == "GET":
        return Response({'testa': 'testb', 'testb': 'testb'})
    elif request.method == "POST":
        # Safely extract the data
        id = request.data.get('id')
        key = request.data.get('key')
        message = request.data.get('message')  # optional field

        # Optional: process the data here (e.g., encrypt message)
        # For now, just echo back what was received
        response_data = {
            'a': id,
            'b': key,
            'c': message,
            'd': 'Data received successfully'
        }

        return Response(response_data)
