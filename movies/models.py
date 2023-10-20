from django.db import models

# Create your models here.
#MODEL FOR GENDER OF THE MOVIE
class TipeMovie(models.Model):
    gender = models.CharField(max_length=64)
    def __str__(self) -> str:
        return f"{self.gender}"
# MODELS FOR A YEAR
class Year(models.Model):
    years = models.IntegerField()
    def __str__(self) -> str:
        return f"{self.years}"
# MODELS FOR THE FIRST LETTER OF A MOVIE  
class FirstLetter(models.Model):
    first_letter = models.CharField(max_length=64)
    def __str__(self) -> str:
        return f"{self.first_letter}"
#Models for Lenguage 
class Lenguage(models.Model):
    lenguages = models.CharField(max_length=64)
    def __str__(self) -> str:
        return f"{self.lenguages}"
#Models for Subtitles  
class Subtitle(models.Model):
    subtitles  = models.CharField(max_length=5)
    def __str__(self) -> str:
        return f"{self.subtitles}"
#Models for Movies load to Data Base
class Movie(models.Model):
    #inherit the atribute from Model FirstLetter
    first_name_letter = models.ForeignKey(FirstLetter, on_delete=models.CASCADE , related_name="first_letters")
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=5000)
    image = models.ImageField(upload_to= 'image')
    # Inherit the Model TipeMovie to ManyToMany Ways more of one
    movies_tipe_movie = models.ManyToManyField(TipeMovie , blank=True , related_name="movies_tipe")
    movies_year = models.ForeignKey(Year , on_delete=models.CASCADE, related_name="year")
    movies_lenguage = models.ForeignKey(Lenguage, on_delete=models.CASCADE, related_name="lenguage")
    movies_subtitles = models.ForeignKey(Subtitle, on_delete=models.CASCADE, related_name="subtitle")
    def __str__(self):
        return f"{self.name}"
        
