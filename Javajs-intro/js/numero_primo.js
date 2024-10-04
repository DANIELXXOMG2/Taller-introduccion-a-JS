var numerote = prompt("Ingresa un número entero positivo:");
numerote = parseInt(numerote);
var Primo = true;
if (numerote <= 1) {
    Primo = false;
} else {
    for (var i = 2; i < numerote; i++) {
        if (numerote % i === 0) {
            Primo = false;
            break;
        }
    }
}
if (Primo) {
    alert(numerote + " es un número primo.");
} else {
    alert(numerote + " no es un número primo.");
}
