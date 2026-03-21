interface Bike {
  cc: number;
  name: string;
}
interface Bike {
  isSport: boolean;
}
type Car = {
  year: number;
  type: string;
  model: string;
};
class MyCar1 {
  year: number;
  type: string;
  model: string;
  constructor(year: number, type: string, model: string) {
    this.year = year;
    this.type = type;
    this.model = model;
  }
}

class MyBike implements Bike {
  cc: number;
  name: string;
  isSport: boolean;

  constructor(cc: number, name: string, isSport: boolean) {
    this.cc = cc;
    this.name = name;
    this.isSport = isSport;
  }
}

const ferrari: Car = new MyCar1(1990, "Ferrari", "F-234");
console.log(ferrari.model);

const royalEnfield: Bike = new MyBike(450, "Himalayan", false);
