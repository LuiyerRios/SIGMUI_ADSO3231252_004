// DATOS DE LA TABLA (simulan datos reales)
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

// REFERENCIA AL CUERPO DE LA TABLA
const tableBody = document.getElementById("tableBody");

// FUNCIÓN PARA CREAR FILAS
function loadTable() {

    // LIMPIAR TABLA
    tableBody.innerHTML = "";

    // RECORRER DATOS
    reservations.forEach(res => {

        // CREAR FILA
        const row = document.createElement("tr");

        // DETERMINAR CLASE SEGÚN ESTADO
        let statusClass = "";
        if (res.status === "Active") statusClass = "active";
        if (res.status === "Completed") statusClass = "completed";
        if (res.status === "Cancelled") statusClass = "cancelled";

        // INSERTAR CONTENIDO
        row.innerHTML = `
            <td>${res.nro}</td>
            <td><strong>${res.plate}</strong></td>
            <td><strong>${res.location}</strong></td>
            <td>${res.time}</td>
            <td>
                <span class="status ${statusClass}">
                    ${res.status}
                </span>
            </td>
        `;

        // AGREGAR FILA A LA TABLA
        tableBody.appendChild(row);
    });
}

// CARGAR TABLA AL INICIAR
loadTable();