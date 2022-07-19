
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







