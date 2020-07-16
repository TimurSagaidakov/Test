$(document).ready(function( ) {
    if ($(window).width()<771){  
        $('.navigation-menu').addClass('mobile');
        $('.menu-btn').on('click',function(){
            $('.navigation-menu').addClass('mobile-show');
            $('.navigation-menu__link').addClass('mobile-menu__text');
            $('.sidebar-menu').removeClass('catalog-active');
            $('.services-submenu').removeClass('services-active');
            $('.services-submenu').removeClass('company-active');
            $('.navigation-menu__link span').removeClass('menu__title');
            $('.services').css('display','none');
            $('.menu-back').css('transform', 'translatex(0)');
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
        $('#company').on('click', function(){
            $('.company-about').addClass('company-active');  
            $('.navigation-submenu').css('animation', 'none');  
            $('.navigation-submenu').css('display', 'block');
            $('.navigation-submenu li').css('border-top', '1px solid #f2f2f2');
            $('.navigation-submenu li').css('border-bottom', '1px solid #f2f2f2');
            $('#catalog').css('display', 'none');
            $('#services').css('display', 'none');
            $('.navigation-menu__link span').addClass('menu__title');
            $('.mobile-menu__text').css('border', 'none');
            $('.sidebar-menu__button').css('display', 'none');
        });
        $('#buyer').on('click', function(){
            $('.buyer').addClass('buyer-active');  
            $('.navigation-submenu').css('animation', 'none');  
            $('.navigation-submenu').css('display', 'block');
            $('.navigation-submenu li').css('border-top', '1px solid #f2f2f2');
            $('.navigation-submenu li').css('border-bottom', '1px solid #f2f2f2');
            $('#catalog').css('display', 'none');
            $('#services').css('display', 'none');
            $('#company').css('display', 'none');
            $('.navigation-menu__link span').addClass('menu__title');
            $('.mobile-menu__text').css('border', 'none');
            $('.sidebar-menu__button').css('display', 'none');
        });
        $('.menu-back-button').on('click', function(){
            $('.sidebar-menu').removeClass('catalog-active');
            $('.services-submenu').removeClass('services-active');
            $('.company-about').removeClass('company-active');
            $('.buyer').removeClass('buyer-active');
            $('.navigation-menu__link span').removeClass('menu__title');
            $('.navigation-submenu').css('display', 'none');
            $('.mobile-menu__text').css('border-bottom', '1px solid #f2f2f2');  
            $('.mobile-contacts').css('display', 'block');
            $('.sidebar-menu__button').css('display', 'block');
            $('#catalog').css('display', 'block');
            $('#services').css('display', 'block');
            $('#company').css('display', 'block');
        });
        $('.menu-back__close').on('click',function(){
            $('.navigation-menu').removeClass('mobile-show');
            $('.mobile-contacts').css('display', 'none');
            $('.sidebar-menu__button').css('display', 'block');
            $('#catalog').css('display', 'block');
            $('#services').css('display', 'block');
            $('#company').css('display', 'block');
            $('.sidebar-menu').removeClass('catalog-active');
            $('.menu-back').css('transform', 'translateX(2000px)');
        });
    };
    $('.hero-main-wrapper').slick({
        infinite: true,
        dots: true,
        dotsClass: 'hero-dots',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.hero-main-arrow__top'),
        nextArrow: $('.hero-main-arrow__bottom')
    });
    $('.bestseller-slider').slick({
        infinite: true,
        dots: true,
        dotsClass: 'bestseller-dots',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
}); 
