from django.urls import path

from blog import views

app_name ='blog' ## application name space = aplicaiton name과 동일 하게
urlpatterns = [
    ## 앞에 url에는 / 안붙이고 뒤에는 붙인다
    path('post/list/', views.PostListTV.as_view(), name='post_list'),
    path('post/<int:pk>/', views.PostDetailTV.as_view(),name='post_detail') ## pass converter, 해당 자리에 오는 값을 파리미터를 pk로 해서 view에 넘기겠다.
]