$(document).ready(function () {
    $('.menu-btn').on('click',function(){
        $('.navigation-menu').addClass('mobile');
        $('.navigation-menu').addClass('mobile-show');
        $('.navigation-menu__link').addClass('mobile-menu__text');
        $('.sidebar-menu').removeClass('catalog-active');
        $('.services-submenu').removeClass('services-active');
        $('.navigation-menu__link span').removeClass('menu__title');
        $('.services').css('display','none');
        $('.menu-back').css('visibility', 'visible');
        $('.mobile-menu__text').css('border-bottom', '1px solid #f2f2f2');
        $('.sidebar-menu-link').css('background-color', '#ffffff');
        $('.mobile-contacts').css('display', 'block');
    });
    $('#catalog').on('click', function(){
        $('.sidebar-menu').addClass('catalog-active');
        $('.navigation-menu__link span').addClass('menu__title');
        $('.mobile-menu__text').css('border', 'none');
        $('.sidebar-menu__button').css('display', 'none');
    });
    $('#services').on('click', function(){
        $('#catalog').css('display', 'none');
        $('.services-submenu').toggleClass('services-active');
        $('.navigation-menu__link span').addClass('menu__title');
        $('.mobile-menu__text').css('border', 'none');
        $('.sidebar-menu__button').css('display', 'none');
        
    });
    $('.menu-back-button').on('click', function(){
        $('.sidebar-menu').removeClass('catalog-active');
        $('.services-submenu').removeClass('services-active');
        $('.navigation-menu__link span').removeClass('menu__title');
        $('.mobile-menu__text').css('border-bottom', '1px solid #f2f2f2');  
        $('.mobile-contacts').css('display', 'block');
        $('.sidebar-menu__button').css('display', 'block');
        $('#catalog').css('display', 'block');
    });
    $('.menu-back__close').on('click',function(){
        $('.navigation-menu').removeClass('mobile-show');
        $('.sidebar-menu').removeClass('catalog-active');
        $('.sidebar-menu').removeClass('services-active');
        $('.menu-back').css('visibility', 'hidden');
        $('.mobile-contacts').css('display', 'none');
        $('.sidebar-menu__button').css('display', 'block');
        $('#catalog').css('display', 'block');
    });
}); 
