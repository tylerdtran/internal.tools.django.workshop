from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Source
from .serializers import SourceSerializer

class SourceListView(generics.ListCreateAPIView):
    queryset = Source.objects.all()
    serializer_class = SourceSerializer


class SourceDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Source.objects.all()
    serializer_class = SourceSerializer

# backend/sources/views.py

# from django.shortcuts import get_object_or_404
# from django.http import JsonResponse
# from django.views import View
# from .models import Source

# class SourceDetailView(View):
#     def delete(self, request, pk):
#         source = get_object_or_404(Source, pk=pk)
#         source.delete()
#         return JsonResponse({'message': 'Source deleted successfully'}, status=204)


# class SourceDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Source.objects.all()
#     serializer_class = SourceSerializer
