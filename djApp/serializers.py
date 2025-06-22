from rest_framework import serializers
from .models import Data
class DataSerial(serializers.ModelSerializer):
    class Meta:
        model = Data
        # fields= ['id','secKey','eMessage'] or
        fields= '__all__'
        