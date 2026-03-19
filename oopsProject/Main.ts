import { Restaurant } from "./classes/Restaurant";
import {
  order1,
  order10,
  order11,
  order2,
  order6,
  order7,
} from "./items/orderData";
import { menu1, menu2, menu3 } from "./items/restaurntMenu";
import {
  customer1,
  customer2,
  customer3,
  manager1,
  manager2,
  manager3,
} from "./items/usersData";

const restaurant1 = new Restaurant(1, menu1, manager1, "Spice Garden");
const restaurant2 = new Restaurant(2, menu2, manager2, "Cafe Brew Haven");
const restaurant3 = new Restaurant(3, menu3, manager3, "Sweet Tooth Delight");

// There are total 3 Customers
customer1.addOrder(order1, restaurant1);
customer1.addOrder(order2, restaurant1);
customer2.addOrder(order7, restaurant2);
customer2.addOrder(order6, restaurant2);
customer3.addOrder(order11, restaurant3);
customer3.addOrder(order10, restaurant3);

console.log("==".repeat(30));
