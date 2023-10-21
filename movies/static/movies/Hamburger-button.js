document.addEventListener('DOMContentLoaded' , function(){
    const nav = document.querySelector('#hamburger button');
    const spam = document.querySelector('#hamburger');
    const side__Bar = document.querySelector('.sideBar-Container');
    const banner = document.querySelector('.catalogo');
    const buttom__Move = document.querySelector('#button-hamburger');
    nav.addEventListener('click', function(){
        nav.classList.toggle('open');
        buttom__Move.classList.toggle('move__Buttom')
            ?buttom__Move.classList.add('move__Buttom')
            :buttom__Move.classList.remove('move__Buttom');
    });
    nav.addEventListener('click', function(){
        side__Bar.classList.toggle('show')
            ?side__Bar.classList.add('show')
            :side__Bar.classList.remove('show');
    });
    nav.addEventListener('click', function () { 
        banner.classList.toggle('move_banner')
            ?banner.classList.add('move_banner')
            :banner.classList.remove('move_banner')
    });
});