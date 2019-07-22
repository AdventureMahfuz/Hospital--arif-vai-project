(function ($) {
    $(document).ready(function () {
        /*megamenu click function*/
        $('ul#nav li.dropdown-mega-menu').click(function () {
            $('.mega-menu').toggle();
        });

        /*top menu dropdown*/
        $('.top-menu ul li a#about').click(function () {
            $('.about-dropdown').toggle();
        });
        $('.top-menu ul li a#about').click(function () {
            $('.language-currency-choose-option-area').hide();
        });

        $('ul.about-dropdown li.cross-icon').click(function () {
            $('.about-dropdown').hide();
        });

        $('.top-menu ul li a#language-currency').click(function () {
            $('.language-currency-choose-option-area').toggle();
        });

        $('div.cross-icon').click(function () {
            $('.language-currency-choose-option-area').hide();
        });

        //mobile menu custom js
        $(".mobile-home-btn").on("click", function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });
        $(".mobile-menu-btn").on("click", function () {
            $('ul.mobile-menu').css({
                'left': '0',
                'opacity': '1',
                'transition': 'all .5s',
            });
        });
        $("#close").on("click", function () {
            $('ul.mobile-menu').css({
                'left': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });
        /*$("ul.mobile-menu li a").on("click", function () {
            $('ul.mobile-menu').css({
                'left': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });*/

        //hero slider
        $('#hero-slider').owlCarousel({
            loop: true,
            margin: 200,
            autoplay: true,
            autoplayTimeout: 7000,
            responsiveClass: true,
            nav: false,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                    loop: true
                }
            }
        });
        //slider animation
        $('#hero-slider').on('translate.owl.carousel', function () {
            $('.item-content h2, .item-content p').removeClass('animated fadeInUp').css('opacity', '0');
            $('.item-1, .item-2, .item-3').css({
                'transform': 'scale(1)',
                'transition': 'all 1s'
            });
        });
        $('#hero-slider').on('translated.owl.carousel', function () {
            $('.item-content h2, .item-content p').addClass('animated fadeInUp').css('opacity', '1');
            $('.item-1, .item-2, .item-3').css({
                'transform': 'scale(1.2)',
                'transition': 'all 1s'
            });
        });

        //clinic slider
        $('.clinic-slider').owlCarousel({
            loop: true,
            margin: 20,
            autoplay: true,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3
                }
            }
        });


        //sticky menu when scroll
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll > 100) {
                $(".top-bar-section").addClass("sticky_top_section");
            } else {
                $(".top-bar-section").removeClass("sticky_top_section");
            }
        });

        //sticky menu when scroll hospital sidebar
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll > 500 && scroll < 2000) {
                $(".hospital-right-sidebar").addClass("sticky_hospital_sidebar");
            } else {
                $(".hospital-right-sidebar").removeClass("sticky_hospital_sidebar");
            }
        });
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll > 2000) {
                $(".hospital-right-sidebar").addClass("fixed_hospital_sidebar");
            } else {
                $(".hospital-right-sidebar").removeClass("fixed_hospital_sidebar");
            }
        });

        //smooth scrolling
        $(".navigation-control ul li a").click(function (e) {
            e.preventDefault();
            var hash = this.hash;
            var position = $(hash).offset().top;
            $("html").animate({
                scrollTop: position - 200
            }, 800);
        });


        //sticky menu when scroll opthalmology sidebar
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll > 150 && scroll < 1000) {
                $(".left-sidebar").addClass("sticky_opthalmology_sidebar");
            } else {
                $(".left-sidebar").removeClass("sticky_opthalmology_sidebar");
            }
        });
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll > 1000) {
                $(".left-sidebar").addClass("fixed_opthalmology_sidebar");
            } else {
                $(".left-sidebar").removeClass("fixed_opthalmology_sidebar");
            }
        });


        //hospital page sticky navigation on scroll
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll > 500) {
                $(".navigation-control").addClass("sticky_navigation_control");
            } else {
                $(".navigation-control").removeClass("sticky_navigation_control");
            }
        });

        //hospital-feat-img-slider
        $('.hospital-feat-img-slider').owlCarousel({
            loop: false,
            margin: 0,
            autoplay: false,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1
                }
            }
        });


        //back to top show when scroll
        $(".back_to_top i.fa").css("display", "none");
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 300) {
                $(".back_to_top i.fa").css("display", "none");
            } else {
                $(".back_to_top i.fa").css("display", "block");
            }
        });
        $(".back_to_top i.fa").on("click", function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });


    });
})(jQuery);