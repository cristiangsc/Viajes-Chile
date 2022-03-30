$(".navbar-nav a").on("click", function(e) {
    // 1
    e.preventDefault();
    // 2
    const href = $(this).attr("href");
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

$(function() {
    $('[data-bs-toggle="tooltip"]').tooltip()

    $("#enviarCorreo").click(() => {
        alert("El correo fue enviado correctamente...");
    });

})