// JS
jQuery().ready(($) => {

	//===== Prealoder
    // 'use strict';

	// window.onload = function () {
	// 	window.setTimeout(fadeout, 100);
	// }

	// function fadeout() {
	// 	document.querySelector('.preloader').style.opacity = '0';
	// 	document.querySelector('.preloader').style.display = 'none';
	// }

    //Header
    $(window).scroll(function() {    
        // var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            $(".header__container").addClass("head");
        } else {
            $(".header__container").removeClass("head");
        }
    });

    // Smooth Scroll
    

    // Works Section Images Loaded
    imagesLoaded('#works-section', () => {
        var elem = document.querySelector('.filter__content-container');
        var iso = new Isotope(elem, {
            // options
            itemSelector: '.filter__content',
            masonry: {
                // use outer width of filter__content for columnWidth
                columnWidth: '.filter__content'
            }
        });

    // Filter Works   
    let filterButtons = document.querySelectorAll('.filter__buttons-container button');
    filterButtons.forEach(e =>
        e.addEventListener('click', (e) => {

            let filterValue = e.target.getAttribute('data-filter');
            iso.arrange({
                filter: filterValue
            });
        })
    );
    });

    // Works Section button
    $('.filter__buttons').click(function() {
        $('.filter__buttons').removeClass('active');
        $(this).addClass('active');
    });

    // Fullpage Scrolling


        $('#main-content').fullpage({
            // scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',

            anchors: ['main-content-data', 'about-section-data', 'works-section-data', 'contact-section-data', 'footer-section-data'],
            sectionsColor: ['#1A374D'],
            menu: '.navigation__menu',
		    lockAnchors: false,
            autoScrolling:true,
		    scrollHorizontally: true,

            // waterEffect: true,
            // waterEffectKey: 'YWx2YXJvdHJpZ28uY29tXzg5M2QyRjBaWEpGWm1abFkzUT16SXo=',
            // waterEffectOptions: {
            //     animateContent: true,
            //     animateOnMouseMove: true
            // }
            
        });
    

    

    // Works Filter Scrolling
   
    // Navigation Hover

    $(".navigation__menu-item").hover(
        function () {
          $(this).addClass("nav__hover");
          $(this).children("a").addClass('nav__title-slide');
        },
        function () {
          $(this).removeClass("nav__hover");
          $(this).children("a").removeClass('nav__title-slide');
        }
    );

    // Settings
    // Maximum offset for image
    var maxDeltaX = 50,
    maxDeltaY = 50;
    $(document).on('mousemove', function(e) {

        var viewportWidth = document.documentElement.clientWidth,
        viewportHeight = document.documentElement.clientHeight;

        var mouseX = e.pageX / viewportWidth * 2 - 1,
        mouseY = e.pageY / viewportHeight * 2 - 1;
        
        var translateX = mouseX * maxDeltaX,
        translateY = mouseY * maxDeltaY;
        $('.about__col, svg.oc-cont1').css('transform', 'translate('+translateX+'px, '+translateY+'px)');

    });

    // Removed fullpageJs Error
    $("body > div").remove();
    $("body > div").hide();

    $("body > div").addClass("hide-elements");


    

});




  
