class Vehicle {
  static color: string = "red";

  constructor(color: string) {
    Vehicle.color = color;
  }

  drive(): void {
    console.log("chugga chugga");
  }
}

class Car extends Vehicle {
  constructor(color: string) {
    super(color);
  }
}

const car = new Car("violet");
console.log(Vehicle.color);
// console.log(car);
