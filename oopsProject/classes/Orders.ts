// import { Payment } from "./Payment";

export class Order {
  static orderNo: number;
  payment: number;
  orderItemsWithPrice: { name: string; price: number }[];

  constructor(orderItemsWithPrice: { name: string; price: number }[]) {
    Order.orderNo++;
    this.orderItemsWithPrice = orderItemsWithPrice;
    this.payment = this.orderItemsWithPrice.reduce(
      (total, data) => (total += data.price),
      0,
    );
  }
}
