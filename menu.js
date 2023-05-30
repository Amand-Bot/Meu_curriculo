function menuShow() {
    let menuMobile = document.querySelector('.navbar__mobile__menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/img/menu_2.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/img/close.png";
    }
}