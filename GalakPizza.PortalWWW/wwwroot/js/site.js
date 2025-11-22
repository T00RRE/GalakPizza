$(document).ready(function () {
    // Inicjalizacja Materialize
    $('.sidenav').sidenav();
    $('.parallax').parallax();

    // Easter egg - Konami code
    let konamiCode = [];
    const pattern = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

    $(document).keyup(function (e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > pattern.length) {
            konamiCode.shift();
        }
        if (konamiCode.toString() === pattern.toString()) {
            alert("Reszta załogi nie żyje!");
            $('body').addClass('rainbow-mode');
        }
    });
});
// Dodaj do site.js
document.addEventListener('DOMContentLoaded', function () {
    // ... istniejący kod ...

    // Animacja timeline przy scrollu
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';

                setTimeout(() => {
                    entry.target.style.transition = 'all 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-event').forEach(el => {
        observer.observe(el);
    });

    // Efekt pisania dla tytułów
    const typeWriter = (element, text, speed = 100) => {
        let i = 0;
        element.innerHTML = '';

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    };

    // Aktywuj dla h1 na stronie głównej
    const heroTitle = document.querySelector('#hero h1');
    if (heroTitle) {
        const originalText = heroTitle.innerText;
        typeWriter(heroTitle, originalText, 150);
    }
});