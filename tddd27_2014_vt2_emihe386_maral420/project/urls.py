from django.conf.urls import patterns, include, url

from django.views.generic import TemplateView

from django.contrib import admin
admin.autodiscover()

class SimpleStaticView(TemplateView):
    def get_template_names(self):
        return ["partials/" + self.kwargs.get('template_name') + ".html"]

    def get(self, request, *args, **kwargs):
        return super(SimpleStaticView, self).get(request, *args, **kwargs)


urlpatterns=patterns('',
	url(r'^api/', include('project.api.urls')),
    url(r'^(?P<template_name>\w+)$', SimpleStaticView.as_view(), name='project'),
                     url(r'^$', TemplateView.as_view(template_name='index.html'))
                         )