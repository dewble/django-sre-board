from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views.generic.detail import BaseDetailView
from django.views.generic.list import BaseListView
from api.views_util import obj_to_post
from blog.models import Post

'''
data = 클라이언트에 보낼 데이터 인자를 대입
safe = 우리가 보내려고 하는 데이터(postlist)가 딕셔너리 일경우 트루 list일 경우 false 
status = 응답코드
'''

class ApiPostLV(BaseListView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        # 쿼리셋에 있는 각 오브젝트들을 ojb to post 로넘겨서 직렬화 수행
        postList = [obj_to_post(obj) for obj in qs]

        return JsonResponse(data=postList, safe=False, status=200)

class ApiPostDV(BaseDetailView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        obj = context['object']
        post = obj_to_post(obj)

        return JsonResponse(data=post, safe=True, status=200)