$(document).ready(function () {
    'use strict';
    /*----------- Preloader -----------*/
    jQuery(window).load(function () {
        // jQuery('.pulse').delay(500).fadeOut();
        // jQuery('.preloader').delay(1000).fadeOut('slow');


        //Wareef curtain roll
          jQuery('#boxOne').delay(2000).animate({top: '100vh'}, 3000);
          jQuery('#boxTwo').delay(2000).animate({bottom: '100vh'}, 3000);
          jQuery('#boxOne').fadeOut();
          
               
    });

    $(window).resize(function () {
        $(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
    });

    //sticky navbar
    $(".navbar-sticky").sticky({ topSpacing: 0 });

    //menu on hover
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();

    //smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });

});