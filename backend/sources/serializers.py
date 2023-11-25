from rest_framework import serializers
from .models import Source

# class OrganizationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Organization
#         # id for primary key
#         fields = ('id', 'name', 'alternative_name', 'notes')

class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Source
        fields = ('id', 'name', 'organization', 'email', 'phone', 'notes')
