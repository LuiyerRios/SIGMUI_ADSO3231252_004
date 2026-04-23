document.getElementById("formulario").addEventListener("submit", function(e){

    const nombre = document.querySelector('input[name="nombre"]').value.trim();
    const documento = document.querySelector('input[name="documento"]').value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.querySelector('input[name="telefono"]').value.trim();
    const placa = document.querySelector('input[name="placa"]').value.trim().toUpperCase();
    const password = document.querySelector('input[name="password"]').value;
    const confirmar = document.querySelector('input[name="confirmar"]').value;

    const error = document.getElementById("mensaje");

    error.textContent = "";
    error.style.color = "red";

    if(correo === ""){
        e.preventDefault();
        error.textContent = "La dirección de correo electrónico no puede estar vacía.";
        return;
    }

    // validar duplicacion
    let correos = JSON.parse(localStorage.getItem("correos")) || [];

    if(correos.includes(correo)){
        e.preventDefault();
        error.textContent = "No se permiten direcciones de correo electrónico duplicadas.";
        return;
    }
    
    const formatoPlaca = /^[A-Z]{3}[0-9]{3}$/;

    if(!formatoPlaca.test(placa)){
        e.preventDefault();
        error.textContent = "Formato de matrícula inválido. Ej: ABC123";
        return;
    }

    if(placa === "" || !formatoPlaca.test(placa)){
    e.preventDefault();
    error.textContent = "El usuario debe registrar al menos una matrícula válida. Ej: ABC123";
    return;
}

    if(password.length < 8){
        e.preventDefault();
        error.textContent = "La contraseña debe tener al menos 8 caracteres.";
        return;
    }

    if(password !== confirmar){
        e.preventDefault();
        error.textContent = "Las contraseñas no coinciden.";
        return;
    }

    e.preventDefault();
    error.style.color = "green";
    error.textContent = "Registro exitoso. Confirmación enviada correctamente.";
    

});