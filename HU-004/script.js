const reservations = [
    {
        nro: "001567",
        plate: "AJS456",
        location: "A2",
        time: "08:00 - 130",
        status: "Active"
    },
    {
        nro: "002215",
        plate: "BJF356",
        location: "B1",
        time: "09:00 - 120",
        status: "Completed"
    },
    {
        nro: "005454",
        plate: "HJD869",
        location: "A2",
        time: "10:00 - 160",
        status: "Cancelled"
    }
];

let totalAmount = 0;
const tableBody = document.getElementById("tableBody");

// 🔙 FUNCIÓN DE LA FLECHA
function goBack() {
    window.history.back();
}

// CARGAR TABLA
function loadTable() {
    tableBody.innerHTML = "";

    reservations.forEach(res => {

        let statusClass = "";
        if (res.status === "Active") statusClass = "active";
        if (res.status === "Completed") statusClass = "completed";
        if (res.status === "Cancelled") statusClass = "cancelled";

        const row = `
        <tr>
            <td>${res.nro}</td>
            <td><strong>${res.plate}</strong></td>
            <td><strong>${res.location}</strong></td>
            <td>${res.time}</td>
            <td><span class="status ${statusClass}">${res.status}</span></td>
        </tr>`;

        tableBody.innerHTML += row;
    });
}

// CALCULAR
function calculate() {
    const type = document.getElementById("type").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    if (!quantity || quantity <= 0) {
        alert("Enter a valid quantity");
        return;
    }

    let price = (type === "hour") ? 2000 : 20000;
    totalAmount = price * quantity;

    document.getElementById("total").innerText = totalAmount;
}

// CONFIRMAR
function confirmReservation() {
    const plate = document.getElementById("plate").value;
    const zone = document.getElementById("zone").value;
    const quantity = document.getElementById("quantity").value;

    if (plate === "") {
        alert("Plate is required");
        return;
    }

    if (zone === "") {
        alert("Select a zone");
        return;
    }

    if (quantity === "" || quantity <= 0) {
        alert("Enter a valid quantity");
        return;
    }

    if (totalAmount === 0) {
        alert("Calculate first");
        return;
    }

    const newReservation = {
        nro: Math.floor(Math.random() * 100000),
        plate: plate,
        location: zone,
        time: quantity,
        status: "Active"
    };

    reservations.push(newReservation);
    loadTable();

    alert("Payment confirmed");

    generatePDF(newReservation);
}

// PDF
function generatePDF(res) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Receipt", 20, 20);
    doc.text("Plate: " + res.plate, 20, 40);
    doc.text("Zone: " + res.location, 20, 50);
    doc.text("Total: $" + totalAmount, 20, 60);

    doc.save("receipt.pdf");
}

// INICIALIZAR
loadTable();