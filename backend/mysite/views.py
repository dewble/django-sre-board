from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = 'home.html' # TemplateView 에서 template_name은 필수