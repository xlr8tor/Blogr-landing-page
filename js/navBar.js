const HAMBURGER = document.getElementById("hamburger--btn");
const hamburgerImg = document.querySelector(".hamburger-img");
const menuContainer = document.querySelector(".menu--container");
const dropdownContent = document.querySelectorAll(".dropdown-content");
const menuButton = document.querySelectorAll(".menu-button");
const closeBtn = document.getElementById("icon-close");

HAMBURGER.addEventListener("click", () => {
    menuContainer.classList.toggle("display");

    // this loops through the dropdownContent / menuButton elements and removes the active state classes so that if one of the dropdownContent are showing when the hamburger is clicked to close the menu, it will reset the menu display to closed.
    for (let i = 0; i < dropdownContent.length; i++) {
        dropdownContent[i].classList.remove("display");
        menuButton[i].classList.remove("active");
        menuButton[i].classList.remove("rotate");
    }

    closeBtn.classList.toggle("display");
    hamburgerImg.classList.toggle("display");
});
