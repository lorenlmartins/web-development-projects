/* Write a program to calculate the cost of a trip.

You will have 3 variables. They are:
1 - Fuel price;
2 - Fuel consumption of the car per km;
3 - Distance to travel.

*/

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const custoViagem = (distanciaEmKm / kmPorLitros) * precoCombustivel;

console.log(`O custo da viagem será de R$ ${custoViagem.toFixed(2)}`);
