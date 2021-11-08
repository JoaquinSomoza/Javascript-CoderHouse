alert("Los días que se reservan turnos son los Lunes y Martes unicamente.");

const turnos = [];


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
                li.innerHTML = `${turnosOcupados.dia}  ${turnosOcupados.hora} hs`
                padre.appendChild(li);

            }
        } else {
            alert("Los turnos se reservan a partir de las 8 horas, intentelo nuevamente.");
        }
    } else {
        alert("El día que ingresó no es Lunes ni Martes, intentelo nuevamente.");
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












