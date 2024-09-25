// Write a program to calculate the cost of a trip.

// You will have 5 variables. They are:
//  1 - Price of ethanol;
//  2 - Price of gasoline;
//  3 - The type of fuel in your car;
//  4 - Average fuel consumption of the car per KM;
//  5 - Distance in KM of the trip;

// Print the cost of the trip to the console.
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}