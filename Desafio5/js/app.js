
alert("Los días que se reservan turnos son los Lunes y Martes unicamente.");


let contadorTurno = 0;
let tiempoEstimado = 0;


class turnero {
    constructor(diaLoM, horaAprox) {
        this.dia = diaLoM;
        this.hora = horaAprox;
    }
    sacarTurno() {
        this.dia = prompt("Ingrese que día necesita reservar");
        this.hora = prompt("Ingrese una hora de preferencia");

        if ((this.dia == "Lunes") || (this.dia == "Martes")) {
            contadorTurno++;
            alert("Su turno esta en el puesto " + contadorTurno + "°" + " y su hora va a ser " + this.hora + " hs.");
        } else {
            alert("El día que ingresó no es Lunes ni Martes,recargue la página e intentelo nuevamente.");
        }
        tiempoEstimado = contadorTurno * 10;
        alert("Su tiempo de espera es " + tiempoEstimado + " minutos.");
        alert("Su turno es el día " + this.dia + " a las " + this.hora + " hs")
    }
}

const turno1 = new turnero("Lunes", 14);
const turno2 = new turnero("Martes", 10);
const turno3 = new turnero();

turno3.sacarTurno();

console.log(turno3)
console.log(turno1.dia);
console.log(turno1.hora);
console.log("ocupado" in turno2);
console.log("dia" in turno2);

