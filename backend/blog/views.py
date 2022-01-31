# from django.shortcuts import render
#
# # Create your views here.
# from django.views.generic import ListView, DetailView
#
# from blog.models import Post
#
#
# class PostListTV(ListView): # 테이블에서 복수개의 레코드를 가져오는 뷰 이므로ListView를 상속 받았다.
#     model = Post ## 대상 테이블
#     # template_name = 'blog/post_list.html'
#
# class PostDetailTV(DetailView): # 테이블에서 특정 레코드 하나를 가져 오는 뷰이므로 DetailView를 상속 받았다.
#     model = Post
#     # template_name = 'blog/post_detail.html' ## default template name을 사용할거기때문에 생략

from django.views.generic import TemplateView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie


@method_decorator(ensure_csrf_cookie, name='dispatch')
class PostListTV(TemplateView):
    template_name = 'blog/post_list.html'  # vue에서 코딩해서 옮겨둔 파일


@method_decorator(ensure_csrf_cookie, name='dispatch')
class PostDetailTV(TemplateView):
    template_name = 'blog/post_detail.html'
