$(function () {
    $("[data-toggle=tooltip]").tooltip();
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    var $navbar = $(".navbar-fixed-top");
    var $home_link = $("#home-link");
    var $is_scrolled = $(".navbar").offset().top > 50;
    if ($is_scrolled) {
        $navbar.addClass("top-nav-collapse");
    } else {
        $navbar.removeClass("top-nav-collapse");
    }
    $home_link.toggleClass("hidden", !$is_scrolled);
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});