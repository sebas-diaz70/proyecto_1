// Importo readline para poder leer datos desde la consola
var readline = require("readline");

// Creo la conexión con la consola
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pregunto el valor que va a ingresar el usuario
rl.question("Ingrese el valor: ", function(valor) {

    // Verifico que no esté vacío para que el programa no tome un espacio vacío como 0
    if (valor.trim() === "") {
        console.log("Error: Debe ingresar un valor.");
        rl.close();
        return;
    }

    // Pregunto la unidad de origen
    rl.question("Ingrese la unidad de origen: ", function(unidadOrigen) {

        // Pregunto la unidad de destino
        rl.question("Ingrese la unidad de destino: ", function(unidadDestino) {

            // Paso todo a minúsculas y elimino espacios para evitar errores
            unidadOrigen = unidadOrigen.trim().toLowerCase();
            unidadDestino = unidadDestino.trim().toLowerCase();

            // Lista de unidades permitidas
            var unidadesValidas = ["c", "f", "k", "m", "km", "cm"];

            // Verifico que las unidades existan
            if (!unidadesValidas.includes(unidadOrigen) || !unidadesValidas.includes(unidadDestino)) {
                console.log("Error: Unidad no válida. Use: c, f, k, m, km, cm.");
                rl.close();
                return;
            }

            // Convierto el valor a número
            valor = Number(valor);

            // Verifico que sea un número válido y que no sea infinito
            if (isNaN(valor) || !isFinite(valor)) {
                console.log("Error: Valor inválido. Debe ingresar un número.");
                rl.close();
                return;
            }

            var resultado;

            // Si las unidades son iguales, el resultado es el mismo valor
            if (unidadOrigen == unidadDestino) {
                resultado = valor;
            }

            // ==========================
            // CONVERSIONES DE TEMPERATURA
            // ==========================

            else if (unidadOrigen == "c" && unidadDestino == "f") {
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

            // ==========================
            // CONVERSIONES DE LONGITUD
            // ==========================

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
            else if (unidadOrigen == "km" && unidadDestino == "cm") {
                resultado = valor * 100000;
            }
            else if (unidadOrigen == "cm" && unidadDestino == "km") {
                resultado = valor / 100000;
            }

            // Si intenta convertir entre categorías distintas
            else {
                console.log("Error: No se puede convertir entre categorías diferentes.");
                rl.close();
                return;
            }

            // Protección extra por seguridad
            if (resultado === undefined) {
                console.log("Error interno en la conversión.");
                rl.close();
                return;
            }

            // Mostrar resultado con 2 decimales
            console.log("Resultado: " + resultado.toFixed(2) + " " + unidadDestino);

            // Cierro la consola
            rl.close();
        });
    });
});