$(document).ready(function () {
    $('.menu-btn').on('click',function(){
        $('.navigation-menu').toggleClass('mobile');
        $('.navigation-menu__link').toggleClass('mobile-menu__text');
        $('.sidebar-menu').removeClass('active');
    });
    $('#catalog').on('click', function(){
        $('.sidebar-menu').toggleClass('active');
    });
}); 
