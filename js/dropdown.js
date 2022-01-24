const menuButton = document.querySelectorAll(".menu-button");
const dropdownContent = document.querySelectorAll(".dropdown-content");

// this function takes an array of elements and a class name as parameters then loops through the array and removes the classname from the elements
const removeClass = (ele, className) => {
    for (let i = 0; i < ele.length; i++) {
        ele[i].classList.remove(className);
    }
};

for (let i = 0; i < menuButton.length; i++) {
    menuButton[i].addEventListener("click", function () {
        // checks if the dropdown content is hidden and stores true or false result in the variable
        let setClasses = !dropdownContent[i].classList.contains("display");

        // cycle through the element arrays and remove the targeted class from all elements
        removeClass(dropdownContent, "display");
        removeClass(menuButton, "rotate");
        removeClass(menuButton, "active");

        //this code runs if the dropdownContent was hidden when the button is first clicked
        if (setClasses) {
            dropdownContent[i].classList.add("display");
            menuButton[i].classList.add("rotate");
            menuButton[i].classList.add("active");
        }
    });
}
