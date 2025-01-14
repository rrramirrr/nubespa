const swiper = new Swiper('.swiper-container', {
    loop: true, // Hace que el slider sea infinito
    navigation: {
        nextEl: '.swiper-button-next', // Flecha derecha
        prevEl: '.swiper-button-prev', // Flecha izquierda
    },
    pagination: {
        el: '.swiper-pagination', // Indicadores de paginación
        clickable: true, // Permite hacer clic en los indicadores
    },
    slidesPerView: 1, // Número de diapositivas visibles al mismo tiempo
    spaceBetween: 20, // Espacio entre las diapositivas
    breakpoints: {
        768: {
            slidesPerView: 2, // En pantallas medianas, muestra 2 diapositivas
        },
        1024: {
            slidesPerView: 3, // En pantallas grandes, muestra 3 diapositivas
        },
    },
});


// Redirigir al hacer clic en los íconos
document.getElementById("instagram-btn").addEventListener("click", function() {
    window.open("https://www.instagram.com/nube_spa_/", "_blank");
});

document.getElementById("facebook-btn").addEventListener("click", function() {
    window.open("https://www.facebook.com/share/14Z7SJD8BM/?mibextid=wwXIfr", "_blank");
});

document.getElementById("whatsapp-btn").addEventListener("click", function() {
    window.open("https://wa.me/message/7INVLXUXH62TO1", "_blank");
});
