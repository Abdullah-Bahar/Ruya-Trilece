(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark').css('top', 0);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


	// Shops map change
    $(document).ready(function () {
        var currentMap = ""; // Aynı harita tekrar yüklenmesin

        // Sayfa ilk yüklendiğinde haritayı ayarla
        updateMapFromCenteredCard();

        // Carousel geçişi tamamlandığında haritayı güncelle
        $('.testimonial-carousel').on('translated.owl.carousel', function () {
            updateMapFromCenteredCard();
        });

        function updateMapFromCenteredCard() {
            var $centerItem = $('.testimonial-carousel .owl-item.center .branch-cart');

            if ($centerItem.length) {
                var mapSrc = $centerItem.attr('data-map');

                if (mapSrc !== currentMap) {
                    currentMap = mapSrc;

                    // Haritayı karart (fadeOut). Tamamen gizlendikten sonra (display: none), geri aramayı yürüt.
                    $('#map-frame').fadeOut(0, function () {
                        var $iframe = $(this);
                        // Eski içeriğin yanıp sönmesini önlemek için hemen about:blank olarak ayarla.
                        $iframe.attr('src', 'about:blank'); 
                        // Yeni harita src'sini ayarla.
                        $iframe.attr('src', mapSrc); 
                        // Yeni haritayı görünür yap (fadeIn).
                        $iframe.fadeIn(0); 
                    });
                }
            }
        }
    });

})(jQuery);
