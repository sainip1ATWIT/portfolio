//Document Objects
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const bar = document.querySelectorAll(".bar");

//EventListeners
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
hamburger.addEventListener("mouseover", grayBackground);
hamburger.addEventListener("mouseleave", redBackground);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function grayBackground() {
    bar.forEach(b => {
        b.style.backgroundColor = "#475569";
    });
}

function redBackground() {
    bar.forEach(b => {
        b.style.backgroundColor = "#a42121";
    });
}