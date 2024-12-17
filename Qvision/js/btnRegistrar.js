document.getElementById('registrar').addEventListener('click', function(evento) {
   // evento.preventDefault(); // Evita el envío del formulario

    var nombre = document.getElementById('idNombre').value;
    var apellidos = document.getElementById('idApellidos').value;
    var correo = document.getElementById('idCorreo').value;
    var correoConfirmado = document.getElementById('idCorreo1').value;
    var contrasena = document.getElementById('exampleInputPassword1').value;
    var contrasenaConfirmada = document.getElementById('exampleInputPassword2').value;

    if (/\d/.test(nombre) || /\d/.test(apellidos)) {
        alert("El nombre y los apellidos no pueden contener números.");
        return;
    }

    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return;
    }

    if (correo !== correoConfirmado) {
        alert("Los correos electrónicos no coinciden.");
        return;
    }

    if (contrasena.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    if (contrasena !== contrasenaConfirmada) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    alert("Formulario enviado correctamente.");
});

document.addEventListener("DOMContentLoaded", function () {
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");
    const botonRegistrar = document.getElementById("registrar");

    function verificarCheckBoxes() {
        if (checkbox1.checked && checkbox2.checked) {
            botonRegistrar.disabled = false;
        } else {
            botonRegistrar.disabled = true;
        }
    }

    verificarCheckBoxes(); // Verifica el estado inicial de los checkboxes

    // Agregar los event listeners a los checkboxes para detectar cambios
    checkbox1.addEventListener("change", verificarCheckBoxes);
    checkbox2.addEventListener("change", verificarCheckBoxes);
});
