
/* HOME */

// function that fades the home page (opacity) as the page is scrolled down

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.home-background').css({
      opacity: function() {
          var elementHeight = $(this).height();
          opacity = ((elementHeight - scrollTop - 100) / elementHeight);
          return opacity;
      }
  });
});

$(".home-text").delay(2000).animate({"opacity": "1"}, 1000);

$(".arrow").delay(3000).animate({"opacity": "1"}, 1000);


// CUSTOMER TESTIMONIALS
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items:1,
      nav: false
    },
    600:{
      items:2,
      nav: false
    },
    1000:{
      items:3,
      nav: false
    }
  }
});




// Contact Us
function ThankYou(){
  var contactbutton = document.getElementById("SupportPopup");
  contactbutton.style.display = "inline-block";
  contactbutton.classList.toggle("show");
  setTimeout(hideThankYou, 4000);
}
function hideThankYou(){
  var contactbutton = document.getElementById("SupportPopup");  
  contactbutton.style.display = "none";
  contactbutton.classList.toggle("hide");
}
