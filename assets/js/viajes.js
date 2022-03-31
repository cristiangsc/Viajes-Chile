//funcion para realizar efecto de scroll a secciones especificas de la página
$(".navbar-nav a").on("click", function(e) {
    // 1
    e.preventDefault();
    // 2
    const href = $(this).attr("href");
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});


//función para realizar efecto toolpip y mensaje de alert al hacer clic sobre el boton enviar
$(function() {
    $('[data-bs-toggle="tooltip"]').tooltip()

    $("#enviarCorreo").click(() => {
        alert("El correo fue enviado correctamente...");
    });

})


// función permite al hacer scroll colocar un fondo sobre el navbar
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 480) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');

    }
})