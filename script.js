document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navLinks = document.querySelectorAll('.navbar-link');

    if (menuToggle && navbarMenu) {
        menuToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-active');

            if (navbarMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.remove('active');
                menuToggle.classList.remove('is-active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    const images = document.querySelectorAll('.gallery img');

    images.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            
            if (img.classList.contains('expanded')) {
                img.classList.remove('expanded');
            } else {
                images.forEach(i => i.classList.remove('expanded'));
                img.classList.add('expanded');
            }
        });
    });

    document.addEventListener('click', () => {
        images.forEach(img => img.classList.remove('expanded'));
    });

    const targetDate = new Date("May 12, 2026 09:00:00").getTime();
    const dEl = document.getElementById("days");
    const hEl = document.getElementById("hours");
    const mEl = document.getElementById("minutes");
    const sEl = document.getElementById("seconds");

    if (dEl) {
        const countdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(countdown);
                document.querySelector(".countdown-container").innerHTML = "Etkinlik Başladı!";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            dEl.innerHTML = days.toString().padStart(2, '0');
            hEl.innerHTML = hours.toString().padStart(2, '0');
            mEl.innerHTML = minutes.toString().padStart(2, '0');
            sEl.innerHTML = seconds.toString().padStart(2, '0');
        }, 1000);
    }
});

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

// etkinlik günün akışı göstergesi 
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("eventModal");
    const closeBtn = document.getElementById("closeModal");

    setTimeout(() => {
        if(modal) modal.style.display = "flex";
    }, 2000);

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});