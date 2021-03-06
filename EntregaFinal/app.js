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
            let noDisponible = turnoOcupado(dia, hora, turnos);
            if (noDisponible) {
                return alert("El turno que seleccionó se encuentra ocupado.");
            }
            turnos.push({ "dia": dia, "hora": hora })
            console.log(turnos);
            let padre = document.getElementById("otorgados");
            padre.innerHTML = "";
            localStorage.setItem("turnos", JSON.stringify(turnos));
            for (const turnosOcupados of turnos) {
                let li = document.createElement("li");
                li.innerHTML = `${turnosOcupados.dia}  ${turnosOcupados.hora} hs`;
                padre.appendChild(li);
            }
            return true;
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
    form.setAttribute("id", "sacarTurno");

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
    $('#btnTurno').attr('disabled', true);
}

//funcion para turnos ocupados
function turnoOcupado(dia, hora, turnos) {
    for (const turno of turnos) {
        if (turno.dia == dia && turno.hora == hora) {
            return true;
        }
    }
    return false;
}



//creacion del autor en footer.
let primerFooter = document.createElement("div");
primerFooter.innerHTML = "<h4>Joaquin Somoza</h4>";
document.body.appendChild(primerFooter);



//Agregando Ajax, abrir con Live Server

$("#ocupados").prepend('<button class="btn" id="btn1">Ver turnos ocupados</button>');

$("#btn1").click(() => {
    $("#mostrarOcupados").fadeIn(1000);
    $.get(URLJSON, function (respuesta, estado) {
        if (estado === "success") {
            let turnos = respuesta;
            for (const turno of turnos) {
                $("#ocupados").append(`<div id="mostrarOcupados">
                <h3>${turno.turno}-${turno.hora} hs</h3>
                </div>
                `)
            }
            $('#btn1').attr('disabled', true);
        } else {
            alert("Error");
        }
    })
})




//animaciones de las imagenes
$("#img__main--1").show(1000);
$("#img__main--2").show(1500);
$("#img__main--3").show(2000);


//animaciones del footer
$('#icono1Footer').click(() => {
    $("#pFooter1").toggle(500);
    $("#pFooter1").animate({
        "opacity": 1,
    }, 500,
        function () {
            console.log("Animacion terminada");
        })
});
$('#icono2Footer').click(() => {
    $("#pFooter2").toggle(500);
    $("#pFooter2").animate({
        "opacity": 1,
    }, 500,
        function () {
            console.log("Animacion terminada");
        })
});
$('#icono3Footer').click(() => {
    $("#pFooter3").toggle(500);
    $("#pFooter3").animate({
        "opacity": 1,
    }, 500,
        function () {
            console.log("Animacion terminada");
        })
});

//Local Storage
function obtenerLocalStorage() {
    if (localStorage.getItem("turnos")) {
        let localStorage = JSON.parse(localStorage.getItem("turnos"));
        return localStorage;
    } else {
        console.log("no hay turnos en el local storage")
    }
}
//localStorage.setItem("turnos", JSON.stringify(turnos));
localStorage.getItem("turnos");
