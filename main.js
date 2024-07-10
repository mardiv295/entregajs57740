// Solicitar datos del usuario
let nombre = prompt("Por favor, ingresa tu nombre:");
let apellido = prompt("Por favor, ingresa tu apellido:");
let cantidadPrestamo = parseFloat(prompt("Ingresa la cantidad de dinero a solicitar:"));

// Variables
const tasaInteresAnual = 0.35; // 35% anual
const plazoPago = 5; // 5 años

// Función para calcular el interés total
function calcularInteresTotal(cantidad, tasaInteres, plazo) {
  let interesTotal = cantidad * tasaInteres * plazo;
  return interesTotal;
}

// Ciclo
do {
  if (cantidadPrestamo > 0) {
    let interesTotal = calcularInteresTotal(cantidadPrestamo, tasaInteresAnual, plazoPago);
    alert(`Hola ${nombre} ${apellido}, el interés total para el préstamo de $${cantidadPrestamo} es de $${interesTotal}`);
    break;
  } else {
    cantidadPrestamo = parseFloat(prompt("Por favor, ingresa una cantidad válida a solicitar:"));
  }
} while (true);