const turnos = [];

// Constante con archivo json
const URLJSON = "../data/datos.json";


let botonSelectDay = document.getElementById("selectDay");
botonSelectDay.addEventListener("click", capturar);

let botonSelectHour = document.getElementById("selectHour");
botonSelectHour.addEventListener("click", capturar);


function capturar() {
    let dia = document.getElementById("dia").value;
    if ((dia == "Lunes") || (dia == "Martes")) {
        let hora = document.getElementById("hora").value;
        if ((hora >= 8) && (hora <= 18)) {
            turnos.push({ "dia": dia, "hora": hora })
            console.log(turnos);
            let padre = document.getElementById("otorgados");
            for (const turnosOcupados of turnos) {
                let li = document.createElement("li");
                li.innerHTML = `${turnosOcupados.dia}  ${turnosOcupados.hora} hs`;
                padre.appendChild(li);
                /* padre.innerHTML = li; */

            }
        } else {
            $("#alert").append(`<p class="pAlert">Los turnos se reservan a partir de las 8 horas, intentelo nuevamente.</p>`);
        }
    } else {
        $("#alert").append(`<p class="pAlert">El día que ingresó no es Lunes ni Martes, intentelo nuevamente.</p>`);

    }
}

var down = document.getElementById("GFG_DOWN");
function GFG_Fun() {

    // Create a form synamically
    var form = document.createElement("form");

    // Create an input element for emailID
    var ID = document.createElement("input");
    ID.setAttribute("type", "text");
    ID.setAttribute("id", "dia");
    ID.setAttribute("placeholder", "Dia");

    // Create an input element for password
    var PWD = document.createElement("input");
    PWD.setAttribute("type", "text");
    PWD.setAttribute("id", "hora");
    PWD.setAttribute("placeholder", "Hora");

    // Create a submit button
    var s = document.createElement("input");
    s.setAttribute("type", "button");
    s.setAttribute("value", "Reservar");
    s.setAttribute("onClick", "capturar()");


    // Append the email_ID input to the form
    form.append(ID);

    // Append the password to the form
    form.append(PWD);

    // Append the button to the form
    form.append(s);

    document.getElementsByTagName("article")[0]
        .appendChild(form);
}


//creacion del autor en footer.
let primerFooter = document.createElement("div");
primerFooter.innerHTML = "<h4>Joaquin Somoza</h4>";
document.body.appendChild(primerFooter);




//Agregando Ajax
$("#ocupados").prepend('<button class="btn" id="btn1">Ver turnos ocupados</button>');

$("#btn1").click(() => {
    $.get(URLJSON, function (respuesta, estado) {

        if (estado === "success") {
            let turnos = respuesta;
            for (const turno of turnos) {
                $("#ocupados").append(`<div>
                <h3>${turno.turno}-${turno.hora} hs</h3>
                </div>
                `)
            }
        } else {
            alert("Error");
        }
    })
})







