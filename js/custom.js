$(document).ready(function () {
    'use strict';
    /*----------- Preloader -----------*/
    jQuery(window).load(function () {
        // jQuery('.pulse').delay(500).fadeOut();
        // jQuery('.preloader').delay(1000).fadeOut('slow');

          jQuery('#boxOne').delay(2000).animate({top: '100vh'}, 5000);
          jQuery('#boxTwo').delay(2000).animate({bottom: '100vh'}, 5000);
          jQuery('#boxOne').fadeOut();
          
                

    });
    $(window).resize(function () {
        $(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
    });
    //sticky navbar
    $(".navbar-sticky").sticky({topSpacing: 0});
    //menu on hover
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();

    //owl arrows slider
    $(".owl-arrows-slider").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
    $('.counter-digit').counterUp({
        delay: 10,
        time: 5000
    });
});