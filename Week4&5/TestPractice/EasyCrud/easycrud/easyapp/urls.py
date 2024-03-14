from django.urls import path
from . import views

urlpatterns = [
    path('', views.getData),
    path ('create', views.addPerson),
    path ('read/<str:pk>', views.getPerson),
    path ('update/<str:pk>', views.updatePerson),
    path ('delete/<str:pk>', views.deletePerson),
]