// Navbar shadow on scroll

window.addEventListener("scroll", function() {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50)
{
navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
}
else
{
navbar.style.boxShadow = "none";
}

});


// Button click animation

const btn = document.querySelector(".start-btn");

btn.addEventListener("click", function(){

alert("Invitation request feature coming soon!");

});