const menuButton = document.querySelector(".menu-button");
const menuImg = menuButton.querySelector("img");
const nav = document.querySelector(".menu-nav");
// const images = document.querySelectorAll('.hamburger-image');

// images.forEach(image => {
//   image.addEventListener('click', () => {
//     images.forEach(img => img.classList.toggle('hide'));
//   });
// });
menuButton.addEventListener("click",toggleMenu);

function toggleMenu( ) {
    nav.classList.toggle("is-open")
    menuButton.classList.toggle("is-open");

    if (nav.classList.contains("is-open")) {
        menuImg.src = "./images/icon lily open small.webp";
        menuImg.alt = "Close menu";
    } else {
        menuImg.src = "./images/icon lily small.webp";
        menuImg.alt = "Open menu";
    }
};
