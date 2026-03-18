const add = (a: number, b: number): number => {
  return a + b;
};

// It's higly recommend to use the return annotation otherwise some developer forgot the return keyword
const sub = (a: number, b: number) => {
  a - b;
};

console.log(add(23, 43));
console.log(sub(23, 43));

// *********************************************************************
// ***************WORKING WITH OTHER TYPES OF FUNCTIONS******************
// *********************************************************************

function divide(a: number, b: number): number {
  return a / b;
}

const mul = function (a: number, b: number): number {
  return a * b;
};
