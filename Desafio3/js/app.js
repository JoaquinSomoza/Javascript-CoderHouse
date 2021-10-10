let ingresaNumero = parseInt(prompt("Ingresa un número entero mayor a 10 y te mostraremos sus múltiplos del 2 al 7: "))

for (let i = 2; i < 8; i++) {
    if (ingresaNumero >= 10) {
        let resultado = ingresaNumero * i;
        alert(ingresaNumero + " X " + i + "=" + resultado);
    }
    else {
        alert("Lo siento, el número no es mayor a 10");
        break;
    }
}



