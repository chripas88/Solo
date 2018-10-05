/* global $, window */

/* ===============================
        Preloader
=============================== */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ===============================
        Team
=============================== */
//$(document).ready(function(){
//  $(".owl-carousel").owlCarousel();
//});

$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        },
        dots: false
    });
});

/* ===============================
        Progress bars
=============================== */
$(function () {
    $("#progress-elements").waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/* ===============================
        Responsive Tabs
=============================== */
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: "slide"
    });
});

/* ===============================
        Portfolio
=============================== */
$(window).on('load', function () {
    // Initialize Isotope
    $("#isotope-container").isotope({

    });

    // Filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // Get filter Value
        var filterValue = $(this).attr('data-filter');

        // Filter portfolio items
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //Active Button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* ===============================
        Magnifier
=============================== */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* ===============================
        Testimonials
=============================== */
$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        //      navText: ['&#x27;next&#x27;','&#x27;prev&#x27;'],
        dots: false
    });
});

/* ===============================
        Stats
=============================== */
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/* ===============================
        Clients
=============================== */
$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        },
        dots: false
    });
});

/* ===============================
        Google Maps
=============================== */
$(window).on('load', function () {
    // Variables for Google Map
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatLng = {
        lat: 40.712685,
        lng: -74.005920
    };

    // 1. Render Google Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatLng
    });

    // 2. Add Map Marker
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Click to see Address"
    });

    // 3. Add Info Window
    var infoWindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show Info Window when user clicks Marker
    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });

    // 4. Resize function
    google.maps.event.addDomListener(window, 'resize', function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
});

/* ===============================
        Navigation
=============================== */
$(function () {

    // show / hide White nav on page load
    showHideNav();

    // show / hide White nav on page scroll
    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {

            // Show White nav
            $("nav").addClass("white-nav-top");

            // Show Dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            // Show Back to Top button
            $("#back-to-top").fadeIn();
        } else {
            // Hide White nav
            $("nav").removeClass("white-nav-top");

            // Show logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            // Hide Back to Top button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // get section id
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

/* ===============================
        Mobile Menu
=============================== */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

/* ===============================
        Animation
=============================== */

// animate on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});