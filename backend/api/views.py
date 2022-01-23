from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views.generic.list import BaseListView
from api.views_util import obj_to_post
from blog.models import Post


class ApiPostLV(BaseListView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        # 쿼리셋에 있는 각 오브젝트들을 ojb to post 로넘겨서 직렬화 수행
        postlist = [obj_to_post(obj) for obj in qs]
        return JsonResponse(data=postlist,safe=False, status=200)