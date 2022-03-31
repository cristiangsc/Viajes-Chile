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