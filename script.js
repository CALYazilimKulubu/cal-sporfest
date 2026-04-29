function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

const targetDate = new Date("May 12, 2026 09:00:00").getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const dEl = document.getElementById("days");
    const hEl = document.getElementById("hours");
    const mEl = document.getElementById("minutes");
    const sEl = document.getElementById("seconds");

    if (dEl && hEl && mEl && sEl) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dEl.innerHTML = days < 10 ? "0" + days : days;
        hEl.innerHTML = hours < 10 ? "0" + hours : hours;
        mEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        sEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }

    if (distance < 0) {
        clearInterval(countdown);
        const container = document.querySelector(".countdown-container");
        if (container) container.innerHTML = "Etkinlik Başladı!";
    }
}, 1000);

window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navbar');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll('.navbar-link');

if (menu && menuLinks) {
    menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        });
    });
}