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


    boton.disabled = true;
    boton.innerHTML = "Enviando...";
    mensaje.style.display = "none"; 

    try {
        
        const n8nWebhookUrl = 'https://TU_DOMINIO_N8N/webhook/recuperar-contrasena'; 

        const response = await fetch(n8nWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email: email,
                origen: "Tech Parking" 
            })
        });
        if (response.ok) {
            mensaje.className = "mensaje-exito";
            mensaje.innerHTML = "Correo enviado con éxito. Revise su bandeja";
            document.getElementById("email").value = ""; 
        } else {
            mensaje.className = "mensaje-error";
            mensaje.innerHTML = "Hubo un problema al procesar su solicitud.";
        }
    } catch (error) {
        mensaje.className = "mensaje-error";
        mensaje.innerHTML = "Error de conexión. Intente nuevamente.";
        console.error("Error enviando a n8n:", error);
    } finally {
        boton.disabled = false;
        boton.innerHTML = "confirm email";
        mensaje.style.display = "block";
        ocultarMensaje(mensaje);
    }
function ocultarMensaje(elemento) {
    setTimeout(() => {
        elemento.style.display = "none";
    }, 5000);
}