let hours = 1;
let pricePerHour = 2000;
let expirationTime = new Date();

// VOLVER
function goBack() {
    window.history.back();
}

// SELECCIONAR FILA
function selectRow(location, vehicle, plate, status) {

    if (status !== "Active") {
        alert("Only active reservations can be extended");
        return;
    }

    document.getElementById("location").value = "Location: " + location;
    document.getElementById("vehicle").value = "Vehicle: " + vehicle;
    document.getElementById("plate").value = "Plate: " + plate;

    // Mostrar botón solo si es activo
    document.querySelector(".submit").style.display = "block";

    updatePrice();
}

// CAMBIAR TIEMPO
function changeTime(value) {
    hours += value;

    if (hours < 1) hours = 1;

    let text = hours === 1 ? "hour" : "hours";
    document.getElementById("hours").innerText = hours + " " + text;

    updatePrice();
}

// CALCULAR AUTOMÁTICO
function updatePrice() {
    let total = hours * pricePerHour;
    document.getElementById("price").innerText = "$" + total;
}

// CONFIRMAR PAGO
function confirmExtension() {

    if (document.getElementById("plate").value === "") {
        alert("Select a reservation first");
        return;
    }

    if (confirm("Confirm payment?")) {
        alert("Payment successful ✅");
        updateExpirationTime();
    }
}

// ACTUALIZAR TIEMPO
function updateExpirationTime() {
    let newExpiration = new Date(expirationTime);
    newExpiration.setHours(newExpiration.getHours() + hours);

    alert("New expiration time: " + newExpiration.toLocaleTimeString());
}