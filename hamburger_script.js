const hamburger_menu_button = document.querySelector(".hamburger--elastic");
const menu = document.querySelector("aside")


hamburger_menu_button.addEventListener('click', function () {

    hamburger_menu_button.classList.toggle('is-active');
    menu.classList.toggle('active');

})