// Importo readline para poder leer datos desde la consola
var readline = require("readline");

// Creo la conexión con la consola
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pregunto el valor
rl.question("Ingrese el valor: ", function(valor) {

    // Pregunto la unidad de origen
    rl.question("Ingrese la unidad de origen: ", function(unidadOrigen) {

        // Pregunto la unidad de destino
        rl.question("Ingrese la unidad de destino: ", function(unidadDestino) {

            // Convierto el valor a número
            valor = Number(valor);

            // Verifico que sea un número válido y que no sea infinito
            if (isNaN(valor) || !isFinite(valor)) {
                console.log("Error: Valor inválido");
                rl.close();
                return;
            }

            // Paso todo a minúscula para evitar problemas al convertir

            unidadOrigen = unidadOrigen.toLowerCase();
            unidadDestino = unidadDestino.toLowerCase();

            var resultado;

          
            // CONVERSIONES TEMPERATURA
          

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

            
            // CONVERSIONES LONGITUD
          

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

            // Si no coincide ninguna opción
            else {
                console.log("Error: Unidades no soportadas o categorías diferentes");
                rl.close();
                return;
            }

            // Muestra el resultado y nos muestra dos decimales despues de la coma masla unida final
            console.log("Resultado: " + resultado.toFixed(2) + " " + unidadDestino);

            // Cierro la consola
            rl.close();
        });
    });
});
