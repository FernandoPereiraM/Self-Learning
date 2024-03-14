from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Person
from .serializers import PersonSerializer

@api_view(['GET'])
def getPerson(request):
    users = Person.objects.all()
    serializer = PersonSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPerson(request, pk):
    users = Person.objects.get(id=pk)
    serializer = PersonSerializer(users, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def addPerson(request):
    serializer = PersonSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['PUT'])
def updatePerson(request, pk):
    user = Person.objects.get(id=pk)
    serializer = PersonSerializer(instance=user, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deletePerson(request, pk):
    user = Person.objects.get(id=pk)
    user.delete()
    return Response('User successfully deleted!')