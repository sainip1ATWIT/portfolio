//Document Objects
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const bar = document.querySelectorAll(".bar");

//EventListeners
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
hamburger.addEventListener("mouseover", blackBackground);
hamburger.addEventListener("mouseleave", whiteBackground);

//functions
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function blackBackground() {
    bar.forEach(b => {
        b.style.backgroundColor = "#000000";
    });
}

function whiteBackground() {
    bar.forEach(b => {
        b.style.backgroundColor = "#fff";
    });
}

//swiper 
var swiper = new Swiper(".projects", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

