$('#slider .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  animateOut: 'fadeOut',
  autoplay: false,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




const tabButtons = document.querySelectorAll(".tablinks");

for (var i=0; i<tabButtons.length; i++){
  tabButtons[i].addEventListener("click", function(){
    var tabName = this.dataset.tab;
    var tabContent = document.getElementById(tabName);

    var allTabContent = document.querySelectorAll(".tabcontent");
    var allTabButtons = document.querySelectorAll(".tablinks");

    for(var j=0; j < allTabContent.length; j++){
      allTabContent[j].style.display="none";
    }

    for(var k=0; k < allTabButtons.length; k++){
      allTabButtons[k].classList.remove("active");
    }

    tabContent.style.display = "block";
    this.classlist.add("active");
  });
}

document.querySelector(".tablinks").click();