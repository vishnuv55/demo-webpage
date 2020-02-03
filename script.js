
const hamburger = document.querySelector(".menu-icon");
const navbar =document.querySelector(".navlist");

hamburger.addEventListener("click", () =>  {
    navbar.classList.toggle("active");
});

