import { Order } from "./Orders";
import { Manager } from "./users";

export class Restaurant {
  private restaurantName: string;
  private menuItems: { name: string; price: number }[];
  private orders: Order | null;
  private owner: Manager;

  constructor(
    menuItems: { name: string; price: number }[],
    owner: Manager,
    restaurantName: string,
  ) {
    this.menuItems = menuItems;
    this.owner = owner;
    this.orders = null;
    this.restaurantName = restaurantName;
  }

  public getRestaurantName(): string {
    return this.restaurantName;
  }

  public getAllmenuItems(): { name: string; price: number }[] {
    return this.menuItems;
  }

  public getAllOrders() {
    return this.orders;
  }

  public setmenuItems(
    owner: Manager,
    itemName: { name: string; price: number },
  ): void {
    if (this.owner != owner) throw Error("Invalid Credentials 403");
    this.menuItems.push(itemName);
  }
}
