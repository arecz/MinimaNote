var hamburger       = document.querySelector(".navbar-content-mobile"),
    hamburgerList   = document.querySelector(".mobile-list"),
    arrow           = document.querySelector(".header-footer--logo"),
    column          = document.querySelector("#plus"),
    plus            = document.querySelector(".fa-plus-circle"),
    plusText        = document.querySelector(".plus-text");

hamburger.addEventListener("click", function(){
    hamburgerList.classList.toggle("navbar-visible");
});

var timer

arrow.addEventListener("click", function(){
  timer = setInterval(function(){scrollBy(0, 20)                              
    if (window.scrollY > 780) {
      clearInterval(timer);
    }
  }, 1);
});



column.addEventListener("click", function(){
  plus.classList.toggle("invisible");
  plusText.classList.toggle("fade-in");
  column.classList.toggle("background-fade-in");
});
                      