
alert("Los días que se reservan turnos son los Lunes y Martes unicamente.");

let contadorTurno = 0;
let tiempoEstimado = 0;
const turnos = [];
let diaAlmacenado;
let horaAlmacenada;


let botonSelectDay = document.getElementById("selectDay");
botonSelectDay.addEventListener("click", seleccionarDia);

function seleccionarDia() {
    let dia = prompt("Ingrese el día que desea reservar");
    if ((dia == "Lunes") || (dia == "Martes")) {
        diaAlmacenado = dia;
    } else {
        alert("El día que ingresó no es Lunes ni Martes, intentelo nuevamente.");
    }
};
let botonSelectHour = document.getElementById("selectHour");
botonSelectHour.addEventListener("click", seleccionarHora);

function seleccionarHora() {
    let hora = prompt("Ingrese la hora que desea reservar");
    if ((hora >= 8) && (hora <= 18)) {

        horaAlmacenada = hora;
    } else {
        alert("Los turnos se reservan a partir de las 8 horas, intentelo nuevamente.");
    }
};

let botonDia = document.getElementById("btnDia");
botonDia.addEventListener("click", mostrarDia);
function mostrarDia() {
    alert("Su dia seleccionado es el " + diaAlmacenado + ".");
};

let botonHora = document.getElementById("btnHora");
botonHora.addEventListener("click", mostrarHora);
function mostrarHora() {
    alert("Su hora seleccionada es a las " + horaAlmacenada + " horas.");
};

let botonEspera = document.getElementById("btnEspera");
botonEspera.addEventListener("click", mostrarEspera);
function mostrarEspera() {
    alert("Su tiempo de espera estimado es de " + tiempoEstimado + " minutos.");
};











