// 5 ejemplos de map:

// Convertir a mayúsculas convierte cualquier palabra en mayusculas
const nombres = ["ana", "luis", "carlos"];
const mayus = nombres.map((nombre) => nombre.toUpperCase());

console.log(mayus); // ["ANA", "LUIS", "CARLOS"]

//  Agregar IVA a precios
const precios = [100, 2000, 3000];
const conIVA = precios.map((precio) => precio * 1.19);

console.log(conIVA); // [119, 2380, 3570]

//formatear nombres
const personas = [
  { nombre: "Ana", apellido: "rojas" },
  { nombre: "Luis", apellido: "pinto" },
];
const nombreCompleto = personas.map(
  (persona) => persona.nombre + " " + persona.apellido,
);
console.log(nombreCompleto); //Ana rojas, Luis pinto

//inventario
const productos = [
  { nombre: "Camisa", precio: 50000 },
  { nombre: "Pantalón", precio: 80000 },
  { nombre: "Gorra", precio: 20000 },
];

const nuevosPrecios = productos.map((p) => ({
  nombre: p.nombre,
  precio: p.precio * 1.1,
}));

console.log(nuevosPrecios);
