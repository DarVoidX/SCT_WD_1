// Select navbar
const navbar = document.getElementById("navbar");

// When scrolling
window.addEventListener("scroll", function(){

    // If page scrolls more than 50px
    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});