$(document).ready(function () {
    setTimeout(() => {
        $(".preloader").fadeToggle();
        AOS.init({
            once: true
        });
    }, 500);

    updateNav();
    updateScroller();

    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: true
    });

    $(window).scroll(function () {
        updateNav();
        updateScroller();
    });

    $(document).on("click", ".portfolio-btn", function () {
        $(".portfolio-btn").removeClass("active-btn");
        $(this).addClass("active-btn");

        $(".portfolio-item").addClass("d-none");
        $(".portfolio-items ."+$(this).attr("data-filter")).removeClass("d-none");
    });
    

    function updateNav() {
        if ($(window).scrollTop() > 30) {
            $(".navbar").addClass("scrolled");
            $(".navbar-brand img").attr("src", "imgs/logo.svg");
            // $(".navbar-toggler-icon").css("background-img", "url(../imgs/menudark.svg)");

        } else {
            $(".navbar").removeClass("scrolled");
            $(".navbar-brand img").attr("src", "imgs/white-logo.svg");
            // $(".navbar-toggler-icon").css("background-img", "url(../imgs/menu.svg)");

        }

        // if ($(window).scrollTop() > 30 && window.matchMedia("(max-width: 1024px)").matches) {
        //     $(".navbar-toggler-icon").css("background-img", "url(../imgs/menudark.svg)");
        // }
    }

    function updateScroller() {
        if ($(window).scrollTop() > 0) {
            $(".scroll-top").removeClass("d-none")
            $(".scroll-top").fadeIn(200);
        } else {
            $(".scroll-top").fadeOut(200);
        }
    }

    $(".pages").hover(function () {
        $(".sub-menu").removeClass("d-none");
    }, function () {
        $(".sub-menu").addClass("d-none");
    });-
    $(".sub-menu").hover(function () {
        $(".sub-menu").removeClass("d-none");
    }, function () {
        $(".sub-menu").addClass("d-none");
    });

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











    $(document).on("click", ".accordion-header", function () {
        if ($(this).next().hasClass("openacc")) {
            $(".openacc").slideToggle(300);
            $(".openacc").removeClass("openacc");
            $(this).removeClass("active-acc");
            return;
        }

        $(".openacc").slideToggle(300);
        $(".openacc").removeClass("openacc");

        $(this).next().slideToggle(300);
        $(this).next().addClass("openacc");
        
        $(".accordion-header").removeClass("active-acc");
        $(this).addClass("active-acc");
    })


    $(document).on("click", ".acc2-header", function () {
        if ($(this).next().hasClass("openacc2")) {
            $(".openacc2").slideToggle(300);
            $(".openacc2").removeClass("openacc2");
            $(this).removeClass("active-acc");
            return;
        }
        
        $(".openacc2").slideToggle(300);
        $(".openacc2").removeClass("openacc2");

        $(this).next().slideToggle(300);
        $(this).next().addClass("openacc2");
        
        $(".acc2-header").removeClass("active-acc");
        $(this).addClass("active-acc");
    })
});