class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }

  getColor(): void {
    console.log(`The color of this vehicle is ${this.color}`);
  }
}

class Car extends Vehicle {
  constructor(color: string) {
    super(color);
  }
  getColor(): void {
    console.log(`The color of this Car is ${this.color}`);
  }
}

const car = new Car("Violet");

car.getColor();
 