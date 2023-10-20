from django import forms

class SearchForm(forms.Form):
    query = forms.CharField(
        label='Consulta',
        widget=forms.TextInput(attrs={'placeholder': 'Ingrese su consulta'})
    )