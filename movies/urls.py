from django.urls import path
from . import views

app_name = "movies"

urlpatterns = [
    path("", views.index , name="index"),    
    path("<int:word_id>" , views.movies, name="word"),
    path("movie/<int:movie_id>", views.movie_id, name="movie_id")
]