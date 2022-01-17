$(document).ready(function () {
    updateNav();
    updateScroller();

    setTimeout(() => {
        $(".preloader").fadeToggle();
    }, 500);


    $(window).scroll(function () {
        updateNav();
        updateScroller();
    });
    
    function updateNav() {
        if ($(window).scrollTop() > 30) {
            $(".navbar").addClass("scrolled");
            $(".navbar-brand img").attr("src", "../home/imgs/logo.svg");
        } else {
            $(".navbar").removeClass("scrolled");
            $(".navbar-brand img").attr("src", "../home/imgs/white-logo.svg");
        }
    }

    function updateScroller() {
        if ($(window).scrollTop() > 0) {
            $(".scroll-top").removeClass("d-none")
            $(".scroll-top").fadeIn(200);
        } else {
            $(".scroll-top").fadeOut(200);
        }
    }

    $(".blog").hover(function () {
        $(".blog-sub-menu").removeClass("d-none");
    }, function () {
        $(".blog-sub-menu").addClass("d-none");
    });
    $(".blog-sub-menu").hover(function () {
        $(".blog-sub-menu").removeClass("d-none");
    }, function () {
        $(".blog-sub-menu").addClass("d-none");
    });

    $(".pages").hover(function () {
        $(".sub-menu").removeClass("d-none");
    }, function () {
        $(".sub-menu").addClass("d-none");
    });
    $(".sub-menu").hover(function () {
        $(".sub-menu").removeClass("d-none");
    }, function () {
        $(".sub-menu").addClass("d-none");
    });
});