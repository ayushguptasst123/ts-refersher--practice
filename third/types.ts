const json = `{"x":23, "y": 34, "z":45}`;

let coordinates = JSON.parse(json);
let anotherCoordinates: { x: number; y: number; z: number } = JSON.parse(json);

// Now `coordinates` are any type we can assign anything to that variable
coordinates = "Something different";
console.log(coordinates);

console.log(anotherCoordinates);
//   But if we declare the type while assign it then it it fixed on that type
/*
//  This will show error
anotherCoordinates = "Will it work";
console.log(anotherCoordinates);
*/

// *************************************************
// ***************OTHER-SECTION*********************
// *************************************************

console.log();
console.log("=".repeat(30));
console.log();

const printSomethingFun = () => {
  return "Hey there I hope your day will be good";
};

let anotherStuff = printSomethingFun();
console.log(anotherStuff);
anotherStuff = "Here I am";
console.log(anotherStuff);
// Here TS automatically declare string type on that variable
