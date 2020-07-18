$(document).ready(function () {
  $(this).scrollTop(0);
  $("#toggle").click(function () {
    $(this).toggleClass("toggle-active");
  });

 

  window.onscroll = function () {
    myFunction();
    var top = window.scrollY;
    console.log(top);
    if (top < 600) {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      document.getElementById("header-link").className += " active";
    } else if (top > 600 && top < 1400) {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      document.getElementById("offer-link").className += " active";
    } else if (top > 1400 && top < 2000) {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      document.getElementById("care-link").className += " active";
    } else if (top > 2000) {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      document.getElementById("visit-link").className += " active";
    }
  };

  function myFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("header-area").classList.add("bg-black");
      document.getElementById("nav-small").classList.remove("nav-pad");
    } else {
      document.getElementById("header-area").classList.remove("bg-black");
      document.getElementById("nav-small").classList.add("nav-pad");
    }
  }

  $(".owl-carousel").owlCarousel({
    loop: true,
    stagePadding: 60,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  var header = document.getElementById("header");
  var btns = header.getElementsByTagName("a");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
});
