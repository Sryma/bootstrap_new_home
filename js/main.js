$(document).ready(function() {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        items: 6,
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
                  480: {
                    items: 2,
                    nav: false
                  },
                  600: {
                    items: 3,
                    nav: false
                  },
                  768: {
                    items: 4,
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
    
var wall = new freewall("#freewall");
      wall.reset({
        selector: '.brick',
        animate: true,
        cellW: 200,
        cellH: 'auto',
        onResize: function() {
         
          wall.fitWidth();
        }
      });
      
      wall.container.find('.brick img').load(function() {
        wall.fitWidth();
      });

      //call sliphover
      $('#freewall').sliphover();
// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//   })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

//   ga('create', 'UA-46794744-6', 'auto');
//   ga('send', 'pageview');

