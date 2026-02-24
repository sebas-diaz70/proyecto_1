

// Obtener los datos que escribe el usuario en consola
var argumentos = process.argv;

// Validar que el usuario escriba 3 datos
if (argumentos.length != 5) {
    console.log("Error: Debe escribir <valor> <unidad_origen> <unidad_destino>");
    process.exit(1);
}

// Guardar los datos en variables
var valor = argumentos[2];
var unidadOrigen = argumentos[3];
var unidadDestino = argumentos[4];

// Convertir el valor a número
valor = Number(valor);

// Validar que sea un número
if (isNaN(valor) || !isFinite(valor)) {
    console.log("Error: Valor inválido");
    process.exit(1);
}

// Pasar las unidades a minúscula
unidadOrigen = unidadOrigen.toLowerCase();
unidadDestino = unidadDestino.toLowerCase();

// Variables para el resultado
var resultado;

// conversor de temperatura

if (unidadOrigen == "c" && unidadDestino == "f") {
    resultado = (valor * 9/5) + 32;
}
else if (unidadOrigen == "f" && unidadDestino == "c") {
    resultado = (valor - 32) * 5/9;
}
else if (unidadOrigen == "c" && unidadDestino == "k") {
    resultado = valor + 273.15;
}
else if (unidadOrigen == "k" && unidadDestino == "c") {
    resultado = valor - 273.15;
}
else if (unidadOrigen == "f" && unidadDestino == "k") {
    resultado = (valor - 32) * 5/9 + 273.15;
}
else if (unidadOrigen == "k" && unidadDestino == "f") {
    resultado = (valor - 273.15) * 9/5 + 32;
}

// conversor de longitud

else if (unidadOrigen == "m" && unidadDestino == "km") {
    resultado = valor / 1000;
}
else if (unidadOrigen == "km" && unidadDestino == "m") {
    resultado = valor * 1000;
}
else if (unidadOrigen == "cm" && unidadDestino == "m") {
    resultado = valor / 100;
}
else if (unidadOrigen == "m" && unidadDestino == "cm") {
    resultado = valor * 100;
}

// Si no entra en ninguna condición
else {
    console.log("Error: Unidades no soportadas o categorías diferentes");
    process.exit(1);
}

// Mostrar resultado con 2 decimales
console.log(resultado.toFixed(2) + " " + unidadDestino);

process.exit(0);