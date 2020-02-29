const hamburger_menu_button = document.querySelector(".hamburger--elastic");
const menu = document.querySelector("aside")

$(window).on('load', function () {
    $('.loader-wrapper').fadeOut('slow');
})
hamburger_menu_button.addEventListener('click', function () {

    hamburger_menu_button.classList.toggle('is-active');
    menu.classList.toggle('active');

})