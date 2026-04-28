//funcion que genera un numero unico para cada ticket.
function generateUniqueNumber() {
    //obtiene la fecha y la hora actual
    const fecha = new Date();
    //devuelve el numero de milisegundos desde el 1 de enero de 1970
    //hace que cada numero sea unico porque el tiempo siempre avanza
    const timestamp = fecha.getTime();
    //se genera un numero aleatorio entre 0 y 999
    const random = Math.floor(Math.random() * 1000);
    //construye el id del ticked
    //usando prefijo "T-", tiempo,numero aleatorio
    return "T-" + timestamp + "-" + random;
}
// se selecciona el boton con la clase "button"
// se le agrega un evento de click que ejecuta la funcion para generar el numero
document.querySelector(".button").addEventListener("click", function() {
    //se llama a la funcion para generar el numero
    const numero = generateUniqueNumber();
    // se muestra el numero generado en el elemento con id "ticketNumber"
    //se reemplaza el contenido con el numero generado
    document.getElementById("ticketNumber").textContent = numero;
});