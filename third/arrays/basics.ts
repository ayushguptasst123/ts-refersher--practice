const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates: Date[] = [new Date(), new Date()];

const carByMake: (string[] | number[])[] = [
  ["ford", "toyota", "bmw"],
  [1999, 1803, 1834],
];


// carMakers.push(34); //We can't do this
carMakers.push("audi");

console.log(carMakers.map(car => car.toUpperCase()));