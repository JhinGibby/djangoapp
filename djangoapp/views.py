# Project Name: ** MyProject **
# Creator Name: Stoyan Dimitrov
# Creation Date: 01-03-2024
# Timestamp: 17:15:36
# Notes: 

from django.shortcuts import render
from django.http import JsonResponse
from django.http import JsonResponse

def items_view(request):
    # Static list of items - replace this with dynamic data later
    items = [
        {'name': 'Item 1', 'description': 'Description of Item 1'},
        {'name': 'Item 2', 'description': 'Description of Item 2'},
    ]
    return JsonResponse(items, safe=False)  # Convert the list to JSON


#def my_view(request):
#    data = {'key': 'value'}  # Your actual data here
#    return JsonResponse(data)  # Automatically sets Content-Type to application/json

def index(request):
    return render(request, 'index.html')

