$(document).ready(function () {
    $('.menu-btn').on('click',function(){
        $('.navigation-menu').addClass('mobile');
        $('.navigation-menu').addClass('mobile-show');
        $('.navigation-menu__link').addClass('mobile-menu__text');
        $('.sidebar-menu').removeClass('active');
        $('.navigation-menu__link span').removeClass('menu__title');
        $('.services').css('display','none');
        $('.menu-back').css('visibility', 'visible');
        $('.mobile-menu__text').css('border-bottom', '1px solid #f2f2f2');
        $('.sidebar-menu-link').css('background-color', '#ffffff');
        $('.mobile-contacts').css('display', 'block');
    });
    $('#catalog').on('click', function(){
        $('.sidebar-menu').addClass('active');
        $('.navigation-menu__link span').addClass('menu__title');
        $('.mobile-menu__text').css('border', 'none');
        $('.mobile-contacts').css('display', 'none');

    });
    $('#services').on('click', function(){
        $('.sidebar-menu').addClass('active');
        $('.navigation-menu__link span').addClass('menu__title');
    });
    $('.menu-back-button').on('click', function(){
        $('.sidebar-menu').removeClass('active');
        $('.navigation-menu__link span').removeClass('menu__title');
        $('.mobile-menu__text').css('border-bottom', '1px solid #f2f2f2');  
        $('.mobile-contacts').css('display', 'block');
    });
    $('.menu-back__close').on('click',function(){
        $('.navigation-menu').removeClass('mobile-show');
        $('.sidebar-menu').removeClass('active');
        $('.menu-back').css('visibility', 'hidden');
        $('.mobile-contacts').css('display', 'none');
    });
}); 
