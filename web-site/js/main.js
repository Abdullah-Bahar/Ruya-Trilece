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
        loop: false,
        center: true,
        dots: false,
        nav: true,
		mouseDrag: false,   // << Bu satırı ekleyin veya false yapın
    	touchDrag: false,   // << Bu satırı ekleyin veya false yapın (dokunmatik ekranlar için)
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
	/*
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
	*/


	// Navbar avtive, hover
	$(document).ready(function() {
	    // Sayfadaki tüm bölüm ID'lerini ve navbar linklerini alalım
	    var sections = $('section, div[id]'); // Sayfanızdaki tüm bölümleri seçin (section veya id'si olan divler)
	    var navLinks = $('.navbar .navbar-nav .nav-link');

	    // Pencere kaydırma olayını dinle
	    $(window).on('scroll', function() {
	        var currentScrollPos = $(window).scrollTop(); // Mevcut kaydırma pozisyonu

	        sections.each(function() {
	            var sectionTop = $(this).offset().top - 100; // Bölümün sayfanın üstüne olan uzaklığı. 100px: Sabit navbar yüksekliği veya boşluk için ayar.
	            var sectionBottom = sectionTop + $(this).outerHeight(); // Bölümün bittiği yer

	            // Eğer mevcut kaydırma pozisyonu bölümün içinde veya yakınındaysa
	            if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
	                var id = $(this).attr('id'); // Bölümün ID'si
				
	                // Tüm navbar linklerinden 'active' sınıfını kaldır
	                navLinks.removeClass('active');
				
	                // İlgili navbar linkini bul ve 'active' sınıfını ekle
	                $('.navbar .navbar-nav .nav-link[href="#' + id + '"]').addClass('active');
	            }
	        });
	    });

	    // Sayfa yüklendiğinde de bir kere kontrol et (başlangıç pozisyonu için)
	    $(window).scroll();

	    // Navbar linklerine tıklandığında pürüzsüz kaydırma ve aktif sınıfı yönetimi
	    navLinks.on('click', function(e) {
	        // e.preventDefault(); // Eğer kaydırma animasyonu yapacaksanız bunu aktif edin

	        navLinks.removeClass('active'); // Tüm aktifleri kaldır
	        $(this).addClass('active'); // Tıklananı aktif yap
		
	        // Eğer kaydırma animasyonu istiyorsanız, aşağıdaki satırı kullanabilirsiniz
	        // var target = $(this).attr('href');
	        // $('html, body').animate({
	        //     scrollTop: $(target).offset().top - 80 // Navbar yüksekliğine göre ayarlayın
	        // }, 500);
	    });
	});


	// Sayfa Yenileme
	$(document).ready(function() {
	    // Sayfanın en üstüne kaydır
	    window.scrollTo(0, 0);

	    // Veya daha modern bir yaklaşımla (smooth animasyon olmadan):
	    // window.scroll({
	    //     top: 0,
	    //     left: 0,
	    //     behavior: 'auto' // 'smooth' yerine 'auto' kullanarak anında kaydırma sağlar
	    // });

	    // Daha önceki kodlarınız (aktif navbar, yapışkan navbar vb.) buraya devam edebilir:
	    // Örneğin, aktif link belirleme veya yapışkan navbar kontrolü gibi kodlarınız buradaysa,
	    // window.scrollTo(0, 0); satırını onların başına eklemeniz yeterlidir.
	    // ...
	});

})(jQuery);
