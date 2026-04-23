document.getElementById("plate").addEventListener("input", function(){
    this.value = this.value.toUpperCase();
});

function formatHour(date){
    return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function checkPlate(){

    const plate = document.getElementById("plate").value.trim().toUpperCase();
    const result = document.getElementById("result");

    result.innerHTML = "";

    if(plate === ""){
        result.innerHTML = "<p style='color:red;'>El agente debe introducir una matrícula</p>";
        return;
    }

    const formato = /^[A-Z]{3}[0-9]{3}$/;

    if(!formato.test(plate)){
        result.innerHTML = "<p style='color:red;'>Formato inválido. Ej: ABC123</p>";
        return;
    }

    let inicio = new Date();
    let fin = new Date();
    fin.setHours(inicio.getHours() + 2);

    let horaInicio = formatHour(inicio);
    let horaFin = formatHour(fin);

    let estado = "";

    if(plate === "ABC123"){
        estado = "Activa";

        result.innerHTML = `
        <div class="card success">
            <div class="icon-status">
                <img src="img/aceptar.png">
            </div>
            <div class="info">
                <h3>PAYMENT PROCESSED</h3>
                <p><strong>Estado de visualización:</strong> ${estado}</p>
                <p><strong>Inicio:</strong> ${horaInicio}</p>
                <p><strong>Caducidad:</strong> ${horaFin}</p>
                <p>Zone A1</p>
            </div>
            <span class="badge valid">Valid</span>
        </div>
        `;
    }

    else if(plate === "XYZ123"){
        estado = "Caducada";

        result.innerHTML = `
        <div class="card error">
            <div class="icon-status">
                <img src="img/boton-x.png">
            </div>
            <div class="info">
                <h3>PAYMENT INACTIVE</h3>
                <p><strong>Estado de visualización:</strong> ${estado}</p>
                <p><strong>Inicio:</strong> ${horaInicio}</p>
                <p><strong>Caducidad:</strong> ${horaFin}</p>
                <p>Zone B2</p>
            </div>
            <span class="badge expired">Expired</span>
        </div>
        `;
    }

    else{
        estado = "No registrada";

        result.innerHTML = `
        <h3 style="margin:10px 0;">NOT REGISTERED</h3>
        <div class="card neutral">
            <div class="icon-status">
                <img src="img/eliminar.png">
            </div>
            <div class="info">
                <p><strong>Estado de visualización:</strong> ${estado}</p>
                <p>No hay información de horas</p>
            </div>
        </div>
        `;
    }
}