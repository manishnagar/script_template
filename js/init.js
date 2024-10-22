document.querySelectorAll('.accordion-toggle').forEach(button => {
  button.addEventListener('click', function() {
    const target = document.querySelector(button.getAttribute('data-target'));
    const isCollapsed = !target.classList.contains('show');

    // Update the image based on the collapse state
    const img = button.querySelector('img');
    if (isCollapsed) {
      img.src = 'images/minus-circle.png';  // Show minus icon when expanded
    } else {
      img.src = 'images/plus-circle.png';   // Show plus icon when collapsed
    }

    // Ensure other buttons update their icons correctly
    document.querySelectorAll('.accordion-collapse.collapse').forEach(collapse => {
      if (collapse !== target) {
        collapse.classList.remove('show');
        const otherButton = document.querySelector(`[data-target="#${collapse.id}"] img`);
        if (otherButton) {
          otherButton.src = 'images/plus-circle.png';  // Revert others to plus icon
        }
      }
    });
  });
});



$(document).ready(function(){
  // Initialize Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,  // Infinite loop
    margin: 10,  // Space between items
    nav: false,  // Disable default navigation buttons
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
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




// number counter javscript code
let count = document.querySelectorAll(".count");
let arr = Array.from(count);

arr.map(function(item) {
  let startnumber = 0;
  let targetNumber = parseInt(item.dataset.number); 
  let originalText = item.innerHTML.replace(/[0-9]/g, '').trim(); 

  function counterup() {
    startnumber++;
    item.innerHTML = startnumber + " " + originalText; 

    if (startnumber == targetNumber) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(function() {
    counterup();
  }, 100);
});
