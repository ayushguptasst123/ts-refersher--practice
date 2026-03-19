import { Order } from "./Orders";
import { Restaurant } from "./Restaurant";

abstract class User {
  private name: string;
  private age: number;
  private email: string;
  private phone: string;

  constructor(name: string, age: number, email: string, phone: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
  }

  // Getters & Setters

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    this.age = age;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getPhone(): string {
    return this.phone;
  }

  setPhone(phone: string): void {
    this.phone = phone;
  }
}

export class Manager extends User {
  private salary: number;

  constructor(
    name: string,
    age: number,
    email: string,
    phone: string,
    salary: number,
  ) {
    super(name, age, email, phone);
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}

export class Chef extends User {
  private specialization: string;
  private experienceYears: number;

  constructor(
    name: string,
    age: number,
    email: string,
    phone: string,
    specialization: string,
    experienceYears: number,
  ) {
    super(name, age, email, phone);
    this.specialization = specialization;
    this.experienceYears = experienceYears;
  }

  getSpecialization(): string {
    return this.specialization;
  }

  getExperience(): number {
    return this.experienceYears;
  }
}

export class Customer extends User {
  private isPremium: boolean;
  private orders: Order[] = [];

  constructor(
    name: string,
    age: number,
    email: string,
    phone: string,
    isPremium: boolean = false,
  ) {
    super(name, age, email, phone);
    this.isPremium = isPremium;
  }

  public addOrder(order: Order, restaurant: Restaurant) {
    this.orders.push(order);
    restaurant.addOrder(order);
  }

  isPremiumCustomer(): boolean {
    return this.isPremium;
  }
}
