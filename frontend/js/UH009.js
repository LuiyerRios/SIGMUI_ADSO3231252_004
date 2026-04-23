function validarEmail() {

    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensajeError");

    mensaje.style.display = "block";

    if (email == "") {
        mensaje.className = "mensaje-error";
        mensaje.innerHTML = "Ingrese su correo";

    } else if (!email.includes("@") || !email.includes(".")) {
        mensaje.className = "mensaje-error";
        mensaje.innerHTML = "El formato del correo no es válido";

    } else {
        mensaje.className = "mensaje-exito";
        mensaje.innerHTML = "Correo enviado con éxito. Revise su bandeja";
    }
}

