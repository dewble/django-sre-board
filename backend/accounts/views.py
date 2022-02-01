from django.contrib.auth.mixins import LoginRequiredMixin, AccessMixin
from django.http import JsonResponse


class MyLoginRequiredMixin(LoginRequiredMixin):
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            data = {'message': 'You must login (code 401)'}
            return JsonResponse(data=data, safe=True, status=401)
        return super().dispatch(request, *args, **kwargs)

class OwnerOnlyMixin(AccessMixin):
        def dispatch(self, request, *args, **kwargs):
            # self.get_object() -> table 에서 해당 레코드를 가져오는 method()
            self.object = self.get_object()
            if request.user != self.object.owner:
                data = {'message': 'Owner only can update or delete (403) !'}
                return JsonResponse(data=data, safe=True, status=403)
            return super().dispatch(request, *args, **kwargs)