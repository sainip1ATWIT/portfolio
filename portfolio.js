console.log('Hello World!');

const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("mobile-nav");

menuButton.addEventListener("click", function(){
    menuButton.innerHTML = "clicked";
});