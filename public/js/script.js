var hamburger       = document.querySelector(".navbar-content-mobile"),
    hamburgerList   = document.querySelector(".mobile-list"),
    arrow           = document.querySelector(".header-footer--logo"),
    arrowBottom     = document.querySelector(".functions--logo"),
    
    columnPlus      = document.querySelector("#plus"),
    columnCalculator= document.querySelector("#calculator"),
    columnCalendar  = document.querySelector("#calendar"),
    columnCheck     = document.querySelector("#check"),
    
    plus            = document.querySelector(".fa-plus-circle"),
    calculator      = document.querySelector(".fa-calculator"),
    calendar        = document.querySelector(".fa-calendar"),
    check           = document.querySelector(".fa-check"),
    
    plusText        = document.querySelector(".plus-text"),
    calculatorText  = document.querySelector(".calculator-text"),
    calendarText    = document.querySelector(".calendar-text"),
    checkText       = document.querySelector(".check-text"),
    
    footer          = document.querySelector(".footer"),
    
    timer


function displayText(column, icon, text) {
  column.addEventListener("mouseover", function(){
    icon.classList.toggle("invisible");
    text.classList.toggle("fade-in");
    column.classList.toggle("background-fade-in");
  });
  column.addEventListener("mouseout", function(){
    icon.classList.remove("invisible");
    text.classList.remove("fade-in");
    column.classList.remove("background-fade-in");
  });
};



function arrowScrollTop() {
  arrow.addEventListener("click", function(){
    timer = setInterval(function(){scrollBy(0, 20)                              
      if (window.scrollY > 780) {
        clearInterval(timer);
      }
    }, 1);
  });
};

function arrowScrollBottom() {
  arrowBottom.addEventListener("click", function(){
    timer = setInterval(function(){scrollBy(0, 20)
      if (window.scrollY > 1150) {
        clearInterval(timer);
      }
    }, 1);
  });
};

function hamburgerToggle() {
  hamburger.addEventListener("click", function(){
      hamburgerList.classList.toggle("navbar-visible");
  });
};

arrowScrollTop();
arrowScrollBottom();
displayText(columnPlus, plus, plusText);
displayText(columnCalculator, calculator, calculatorText);
displayText(columnCalendar, calendar, calendarText);
displayText(columnCheck, check, checkText);





