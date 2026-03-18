class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  protected honk(): void {
    console.log("beep");
  }

  static blowHorn(): void {
    console.log("Clear the road");
  }
}

class Car extends Vehicle {
  honk() {
    console.log("Beep");
  }
}

const vehicle = new Vehicle();
const car = new Car();

Vehicle.blowHorn();
car.drive();
car.honk();
