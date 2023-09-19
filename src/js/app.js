$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    fluidSpeed: 1000,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    autoWidth: true,
    autoWidth: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        autoWidth: false,
        autoHeight: false,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,

        loop: true,
      },
    },
  });


  $("#hamburgerBtn").add('click', function () {
    $("#navbar-dropdown").show()
  })

});
