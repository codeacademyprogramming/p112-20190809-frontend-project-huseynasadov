$(function () {

    //scrool

    let nav = $('nav');
    let win = $(window);
    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 300) {
           nav.removeClass("sticky");
       } else {
           nav.addClass("sticky");
       }
    });

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
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        })
    });

    // carpousel section home


    $('.section-home .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items:1,
        navSpeed:800,
        autoplay:false,
        transitionStyle : "fade",
    })

    // section-video

    $(".youtube-video").modalVideo();

    $(".accordion-about .accordions").each(function (ind, val) {
        $(val).click(function () {
            $(this).siblings('.active-red').removeClass('active-red');
				$(this).toggleClass('active-red');    
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                $(".accordion-about .accordions").each(function (ind, val) {
                    val.nextElementSibling.style.maxHeight = null;
                    
                })
                panel.style.maxHeight = panel.scrollHeight + "px";           
            }
        })
    });

    // section Our Popular
    
    $('#carousel-popular').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items:3,
        transitionStyle : "fade",
        responsive:{
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    })

    // section-event

    $('#carousel-event').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items:3,
        transitionStyle : "fade",
        responsive:{
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    })

    // section-staff

    $('#carousel-staff').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items:3,
        transitionStyle : "fade",
        responsive:{
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
    let owl = $('#carousel-publications');
    owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items:4,
        transitionStyle : "fade",
        responsive:{
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:4
            }
        }
    })
    
})




