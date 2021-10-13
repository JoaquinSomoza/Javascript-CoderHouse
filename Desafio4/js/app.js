alert("Los días que se reservan turnos son los Lunes y Martes unicamente.");

let solicitarTurno = prompt("Ingrese que día necesita reservar");
let contadorTurno = 0;
let tiempoEstimado = 0;

function turno() {
    if ((solicitarTurno == "Lunes") || (solicitarTurno == "Martes")) {
        contadorTurno++;
        alert("Su turno esta en el puesto " + contadorTurno + "°");
    } else {
        alert("El día que ingresó no es Lunes ni Martes,recargue la página e intentelo nuevamente.");
    }
}
turno();

function tiempo() {
    tiempoEstimado = contadorTurno * 10;
    alert("Su tiempo de espera es " + tiempoEstimado + " minutos.");
}
tiempo();
