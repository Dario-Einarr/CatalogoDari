from django.shortcuts import render
from .models import Movie, FirstLetter
from django.core.paginator import Paginator
# Create your views here.
def index(request):
    letters = FirstLetter.objects.all()
    return render(request, "movies/index.html",{
        "letters": letters
    })


def movies(request, word_id):
    word = FirstLetter.objects.get(pk=word_id)
    letters = FirstLetter.objects.all()
    movies = Movie.objects.filter(first_name_letter = word)
    paginator = Paginator(movies,8)
    page = request.GET.get('page')
    movies = paginator.get_page(page)
    return render(request , "movies/movies.html", {
        "word": word,
        "movies": movies,
        "letters": letters,
    })

def movie_id(request, movie_id):
    movie = Movie.objects.get(pk=movie_id)
    movies = Movie.objects.all()
    return render(request, "movies/movie_id.html",{
        "movie": movie,
        "movies": movies,
        "movie_id": movie_id
    })