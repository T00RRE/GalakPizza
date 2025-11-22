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