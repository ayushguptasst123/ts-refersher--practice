import { Order } from "../classes/Orders";

/**
 * Menu--1
 */
const orderItem1 = [
  { name: "Pizza", price: 250 },
  { name: "Burger", price: 120 },
];
const orderItem2 = [
  { name: "Pasta", price: 200 },
  { name: "Sandwich", price: 150 },
  { name: "Fries", price: 90 },
];
const orderItem3 = [
  { name: "Pizza", price: 250 },
  { name: "Burger", price: 120 },
  { name: "Pasta", price: 200 },
  { name: "Sandwich", price: 150 },
  { name: "Fries", price: 90 },
  { name: "Wrap", price: 180 },
];
const orderItem4 = [
  { name: "Wrap", price: 180 },
  { name: "Fries", price: 90 },
];

/**
 * Menu--2
 */
const orderItem5 = [
  { name: "Coffee", price: 80 },
  { name: "Tea", price: 50 },
];
const orderItem6 = [
  { name: "Cold Drink", price: 100 },
  { name: "Lemonade", price: 70 },
  { name: "Mojito", price: 120 },
];
const orderItem7 = [
  { name: "Coffee", price: 80 },
  { name: "Tea", price: 50 },
  { name: "Cold Drink", price: 100 },
  { name: "Lemonade", price: 70 },
  { name: "Milkshake", price: 130 },
  { name: "Mojito", price: 120 },
];

const orderItem8 = [
  { name: "Milkshake", price: 130 },
  { name: "Mojito", price: 120 },
];

/**
 * Menu-3
 */
const orderItem9 = [
  { name: "Ice Cream", price: 90 },
  { name: "Cake", price: 150 },
];
const orderItem10 = [
  { name: "Brownie", price: 130 },
  { name: "Donut", price: 60 },
  { name: "Cupcake", price: 80 },
];
const orderItem11 = [
  { name: "Ice Cream", price: 90 },
  { name: "Cake", price: 150 },
  { name: "Brownie", price: 130 },
  { name: "Donut", price: 60 },
  { name: "Cupcake", price: 80 },
  { name: "Waffle", price: 140 },
];
const orderItem12 = [
  { name: "Waffle", price: 140 },
  { name: "Brownie", price: 130 },
];

export const order1 = new Order(orderItem1);
export const order2 = new Order(orderItem2);
export const order3 = new Order(orderItem3);
export const order4 = new Order(orderItem4);
export const order5 = new Order(orderItem5);
export const order6 = new Order(orderItem6);
export const order7 = new Order(orderItem7);
export const order8 = new Order(orderItem8);
export const order9 = new Order(orderItem9);
export const order10 = new Order(orderItem10);
export const order11 = new Order(orderItem11);
export const order12 = new Order(orderItem12);
