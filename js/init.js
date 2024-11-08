$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,  // Infinite loop
    margin: 5,  // Space between items
    nav: false,  // Disable default navigation buttons
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  // Trigger carousel previous on left-arrow click
  $('#customPrevBtn').click(function() {
    $(".owl-carousel").trigger('prev.owl.carousel');
  });

  // Trigger carousel next on right-arrow click
  $('#customNextBtn').click(function() {
    $(".owl-carousel").trigger('next.owl.carousel');
  });
});




