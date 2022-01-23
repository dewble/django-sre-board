from django.urls import path

from api import views

app_name = 'api' # app namespace
urlpatterns = [
    path('post/list/', views.ApiPostLV.as_view(), name='post_list'),
]