import { Chef, Customer, Manager } from "../classes/users";
/**
 * Mangers data
 */
const manager1 = new Manager(
  "Rahul Sharma",
  35,
  "rahul.sharma@example.com",
  "9876543210",
  60_000,
);

const manager2 = new Manager(
  "Priya Mehta",
  32,
  "priya.mehta@example.com",
  "9123456780",
  55_000,
);

const manager3 = new Manager(
  "Amit Patel",
  40,
  "amit.patel@example.com",
  "9988776655",
  65_000,
);

/**
 * Chefs data
 */
const chef1 = new Chef(
  "Vikas Khanna",
  42,
  "vikas.khanna@example.com",
  "9876501234",
  "Indian Cuisine",
  15,
);

const chef2 = new Chef(
  "Anjali Desai",
  30,
  "anjali.desai@example.com",
  "9123409876",
  "Italian Cuisine",
  8,
);

const chef3 = new Chef(
  "Rohit Verma",
  36,
  "rohit.verma@example.com",
  "9988701122",
  "Desserts",
  12,
);

/**
 * Customers Data
 */

const customer1 = new Customer(
  "Neha Gupta",
  28,
  "neha.gupta@example.com",
  "9871234567",
  true,
);
const customer2 = new Customer(
  "Rohan Shah",
  24,
  "rohan.shah@example.com",
  "9123456789",
  false,
);
const customer3 = new Customer(
  "Sneha Patel",
  31,
  "sneha.patel@example.com",
  "9988776655",
  true,
);

export {
  manager1,
  manager2,
  manager3,
  chef1,
  chef2,
  chef3,
  customer1,
  customer2,
  customer3,
};
