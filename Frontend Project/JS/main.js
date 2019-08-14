$(function () {
    // sosial icons nav

    $(".fabs i").click(function () {
        $(".fabs i").removeClass("active");
        $(this).toggleClass("active");
    });;



    // Dropdown menu 

    $(".li-home .home").mouseover(function () {

        $(".dropdown-home").css("display", "block");
        setTimeout(function () {
            $(".dropdown-home").css({ "opacity": "1", "transform": "translateY(15px)" });
        }, 50)

    });

    $(".li-home").mouseleave(function () {
        $(".dropdown-home").css({ "opacity": "0", "display": "none", "transform": "translateY(30px)" })
    });

    // searching click

    $(".searching .a-search").click(function () {
        $(".search-input").css("display", "flex");
        setTimeout(function () {
            $(".search-input").css("opacity", "1");
        }, 200)
    });

    $(".times").click(function () {
        $(".search-input").css("opacity", "0");
        setTimeout(function () {
            $(".search-input").css("display", "none");
        }, 200)
    });

    //side Navigation

    $(".menu-bars").click(function () {
        $(".sidenav").css("width", "350px");
    });
    $(".times").click(function () {
        $(".sidenav").css("width", "0");
    });

    $(".sidenav ul li").each(function (ind, val) {
        $(val).click(function () {
            let panel = this.nextElementSibling;
            if (panel.style.height === "145px") {
                panel.style.height = "0px";
            } else {
                panel.style.height = "145px";
            }
        })
    });

    // carpousel section home


    $('.section-home .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items:1  
    })
})

