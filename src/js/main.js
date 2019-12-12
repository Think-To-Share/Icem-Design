$(document).ready(function(){
    $(".product-carousel-section .owl-carousel").owlCarousel({
        loop: true,
        margin:10,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: true,
        navText: ['<i class="fas fa-arrow-circle-left fa-2x"></i>','<i class="fas fa-arrow-circle-right fa-2x"></i>'],
        dots: false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });

    $(".client-carousel-section .owl-carousel").owlCarousel({
        loop: true,
        margin:15,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: true,
        navText: ['<i class="fas fa-angle-left fa-2x"></i>','<i class="fas fa-angle-right fa-2x"></i>'],
        dots: false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });

    $(".achivement-section .owl-carousel").owlCarousel({
        loop: false,
        margin:20,
        slideBy: 2,
        autoplay: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left fa-2x"></i>','<i class="fas fa-angle-right fa-2x"></i>'],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            }
        }
    });

    $(".slider-section .owl-carousel").owlCarousel({
        loop: false,
        margin:0,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        dots: false,
        autoplayHoverPause:true,
        items: 1,
    });
});