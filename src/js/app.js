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


  // $("#hamburgerBtn").on('click', function () {
  //  if(!$("#navbar-dropdown").hasClass("showNav")) {
  //   $("#navbar-dropdown").addClass("showNav");
  //   $("#navbar-dropdown").removeClass("hideNav");


  //  } else {
  //   $("#navbar-dropdown").removeClass("showNav")
  //   $("#navbar-dropdown").addClass("hideNav")
  //  }
  // })

});


let child = document.querySelector('#child')
document.querySelector('#btn').addEventListener('click', function () {
if (child.classList.contains("navHide"))  {
    document.querySelector("#child").classList.add("navShow")
document.querySelector("#child").classList.remove("navHide")
} else {
    document.querySelector("#child").classList.remove("navShow")
document.querySelector("#child").classList.add("navHide")
}

})
