const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates: Date[] = [new Date(), new Date()];

const carByMake: (string[] | number[])[] = [
  ["ford", "toyota", "bmw"],
  [1999, 1803, 1834],
];

// carMakers.push(34); //We can't do this
carMakers.push("audi");

console.log(carMakers.map((car) => car.toUpperCase()));

const dummyArr: {
  name: string;
  role: string;
  bounty: number;
  saySomething(): void;
}[] = [
  {
    name: "luffy",
    role: "captain",
    bounty: 1500000,
    saySomething(): void {
      console.log("I will be the king of pirate");
    },
  },
  {
    name: "zoro",
    role: "swordsMan",
    bounty: 100000,
    saySomething(): void {
      console.log("My Name goes to heaven ");
    },
  },
];

dummyArr[1].saySomething();