// typing animation
var hamburgur = document.querySelector(".menu-icon");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");


hamburgur.addEventListener("click", function () {
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})


// animate
gsap.registerPlugin(ScrollTrigger)
const boxes = gsap.utils.toArray('.fadeIn');

boxes.forEach((fadeIn, i) => {
    const anim = gsap.fromTo(fadeIn, { autoAlpha: 0, y: 40 }, { duration: 1, autoAlpha: 1, y: 0 });
    ScrollTrigger.create({
        trigger: fadeIn,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
});