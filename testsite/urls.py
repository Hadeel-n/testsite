
from django.urls import path
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns

from django.views.generic import TemplateView
from graphene_django.views import GraphQLView



urlpatterns = [

    path('admin/', admin.site.urls),
    path("graphql", GraphQLView.as_view(graphiql=True)),
    path('', TemplateView.as_view(template_name='index.html')),

]

urlpatterns = format_suffix_patterns(urlpatterns)