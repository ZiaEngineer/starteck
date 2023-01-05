/* Page Preloder here
function Preloader() {
    var preloader = $('#loader');
    preloader.show();
    preloader.delay(3000).fadeOut(500);
}
if (!sessionStorage.getItem('doNotShow')) {
    sessionStorage.setItem('doNotShow', true);
    Preloader();
} else {
    $('#loader').hide();
}
*/
/*owl carasoul portfolio*/
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<i class="fas fa-caret-left" aria-hidden="true"></i>', '<i class="fas fa-caret-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        smartSpeed: 1500,
        responsiveClass: true,
        mouseDrag: false,
        autoplayHoverPause: true,
        startPosition: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false,
            },
            480: {
                items: 1,
                nav: true,
            },
            768: {
                items: 2,
                nav: true,
            },
            992: {
                items: 2,
                nav: true,
            },
            1200: {
                items: 3,
                nav: true,
            }
        }
    })


    // menu fixed js code
    $(window).scroll(function() {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 50) {
            $('.navbar').addClass('animated fadeInDown');
        } else {
            $('.navbar').removeClass('animated fadeInDown');
        }
    });

    // toTop query here
    $(document).ready(function() {

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll_To_Top').fadeIn();
            } else {
                $('.scroll_To_Top').fadeOut();
            }
        });


        $('.scroll_To_Top').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 700);
            return false;
        });

    });

    // Menu scroll to element here
    $('html, body').hide();

    if (window.location.hash) {
        setTimeout(function() {
            $('html, body').scrollTop(0).show();
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top - 95
            }, 800)
        }, 0);
    } else {
        $('html, body').show();
    }
    var headerHeight = $('.custom-navbar').outerHeight(); // Target your header navigation here

    $('#main-nav li a').click(function(e) {

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - 85
        }, 800);

        e.preventDefault();
    });


});

/*query for mac and pc */

if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $("body").addClass("mac");
} else {
    $("body").addClass("pc");
}



/* animation start*/
// Start AOS Animation call function
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});









$(document).ready(function() {
    $(".owl-item #toggle").click(function() {
        var elem = $(this).text();
        if (elem == "Read More...") {
            //Stuff to do when btn is in the read more state
            $(this).text("Read Less");
            $(".owl-item #text").slideDown();
            $(".owl-item #dots").hide();

        } else {
            //Stuff to do when btn is in the read less state
            $(this).text("Read More...");
            $(".owl-item #text").slideUp();
            $(".owl-item #dots").show();
        }
    });
});