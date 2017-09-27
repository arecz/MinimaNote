var hamburger       = document.querySelector(".navbar-content-mobile"),
    hamburgerList   = document.querySelector(".mobile-list"),
    arrow           = document.querySelector(".header-footer--logo")

hamburger.addEventListener("click", function(){
    hamburgerList.classList.toggle("navbar-visible");
});

var timer

arrow.addEventListener("click", function(){
  timer = setInterval(function(){scrollBy(0, 6)                              
    if (window.scrollY > 780) {
      clearInterval(timer);
    }
  }, 1);
});

                      