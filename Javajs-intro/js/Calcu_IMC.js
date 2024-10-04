document.write("Hello World");
var peso = prompt("Ingrese un número");
var altura = prompt("Ingrese la altura");
var categoria;
console.log(peso, altura);
peso = parseFloat(peso);
altura = parseFloat(altura);

var imc = peso / (altura * altura);
console.log(imc);

if (imc < 18.5) {
    categoria = "Bajo peso";
}
else if (imc < 25) {
    categoria = "Normal";
}
else if (imc < 30) {
    categoria = "SobrePeso";    
}
else if (imc < 35) {
    categoria = "Obesidad T1";
}
else if (imc < 40) {
    categoria = "Obesidad T2";
}
else {
    categoria = "SobrePeso";
}

alert("Tu IMC es " + imc.toFixed(2) + ". Categoría: " + categoria);
