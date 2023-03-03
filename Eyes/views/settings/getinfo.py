from django.http import JsonResponse


def getinfo_web(request):
    return JsonResponse({
        'result': "success",
        'username': "hello, world",
    })


def getinfo(request):
    platform = request.GET.get('platform')
    return getinfo_web(request)
