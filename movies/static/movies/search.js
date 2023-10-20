document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form');
    form.addEventListener('input', function (event) {
      event.preventDefault();
      const searchTerm = document.querySelector('#search').value.toLowerCase();
      const pages = ['../index.html', '../Page/Movies.html', '../Page/Shows.html', '../Movies/Num.html', '../Movies/A.html', '../Page/Novel.html','/Movies/B.html','/Movies/Numeros/Num-1.html','/Movies/Numeros/Num-2.html','/Movies/A/A-1.html','/Movies/A/A-2.html','/Movies/A/A-3.html','/Movies/A/A-4.html','/Movies/A/A-5.html','/Movies/A/A-6.html','/Movies/A/A-7.html','/Movies/A/A-8.html','/Movies/A/A-9.html','/Movies/A/A-10.html','/Movies/A/A-11.html','/Movies/A/A-12.html','/Movies/A/A-13.html','/Movies/A/A-14.html','/Movies/B/B-1.html','/Movies/B/B-2.html','/Movies/B/B-3.html','/Movies/B/B-4.html','/Movies/B/B-5.html','/Movies/B/B-6.html','/Movies/B/B-7.html','/Movies/B/B-8.html','/Movies/B/B-9.html']; // Agrega aquí todas las páginas de tu sitio web
      const results = [];

      pages.forEach(page => {
        // Almacena todos los objetos con la clase "searchable" y los almacena en "pageResults"
        fetch(page)
          .then(response => response.text())
          .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const pageResults = doc.querySelectorAll('.searchable');

            pageResults.forEach(result => {
              if (result.textContent.toLowerCase().includes(searchTerm)) {
                results.push(result);
              }
            });
          })
          .then(() => {
            // Muestra los resultados de la búsqueda en la página principal
            const searchResults = document.querySelector('#search-results');
            searchResults.innerHTML = '';

            if (results.length === 0) {
              searchResults.innerHTML = '<p>No se encontraron resultados.</p>';
            } else {
              results.forEach(result => {
                const li = document.createElement('li');
                li.innerHTML = result.outerHTML;
                searchResults.appendChild(li);
              });
            }
          })
          .catch(error => console.error(error));
      });
    });
      const form_search = document.getElementById('search');
      const show_results = document.querySelector('.container-result');
      const show_search = document.getElementById('button-search');
      show_search.addEventListener('click', function (e) {
      if (form_search.classList.contains('show')) {
        form_search.classList.remove('show');
      }
      else {
        form_search.classList.add('show')
      }
    });
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    form_search.addEventListener('input', function () {
      if (form_search.value !== "") {
        show_results.classList.remove('show');
      }
      else {
         show_results.classList.add('show');
      }
    });
  });
});
