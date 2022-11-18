// typing animation
var hamburgur = document.querySelector(".menu-icon");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");


hamburgur.addEventListener("click", function () {
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})
