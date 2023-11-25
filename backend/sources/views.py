from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Source
from .serializers import SourceSerializer

class SourceListView(generics.ListCreateAPIView):
    queryset = Source.objects.all()
    serializer_class = SourceSerializer

# class SourceDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Source.objects.all()
#     serializer_class = SourceSerializer
