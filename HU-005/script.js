let hours = 1;
let pricePerHour = 2000;

function selectRow(location, vehicle, plate) {
    document.getElementById("location").value = "Location: " + location;
    document.getElementById("vehicle").value = "Vehicle: " + vehicle;
    document.getElementById("plate").value = "Plate: " + plate;
    updatePrice();
}

function changeTime(value) {
    hours += value;
    if (hours < 1) hours = 1;

    let text = hours === 1 ? "hour" : "hours";
    document.getElementById("hours").innerText = hours + " " + text;

    updatePrice();
}

function updatePrice() {
    let total = hours * pricePerHour;
    document.getElementById("price").innerText = "$" + total;
}