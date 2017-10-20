// type.min plugin
var typed3 = new Typed('.element', {
    strings: ['Hi I am: <i style="color:maroon">web developer</i>', 'I love to: <strong style="color:maroon">make website</strong>', 'Welcome to my <i style="color:maroon">portfolio</i>'],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: false, // this is a default
    loop: true
  });
//coursel
 $('.carousel').slick({
    
    autoplay: true,
    arrows: false,
    // dots:true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

$(document).ready(function() {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 5,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  
                  600: {
                    items: 3,
                    nav: false
                  },
                  
                  1000: {
                    items: 5,
                    nav: false,
                    loop: true,
                    margin: 5
                  }
                  
                }
      });
      })
    
    
 // $(".owl-carousel").owlCarousel({
 //        autoPlay: true,
 //        loop: true,
 //        margin: 50,
 //        responsive: {
 //            0: {
 //                items: 1
 //            },
 //            600: {
 //                items: 3
 //            },
 //            1000: {
 //                items: 5
 //            }
 //        }
 //  });
