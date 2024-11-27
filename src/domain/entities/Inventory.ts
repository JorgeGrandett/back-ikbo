export class Inventory {
  constructor(
    public idInventory: number,
    public idProduct: number,
    public batch: string,
    public amount: number,
	public expirationDate: Date
  ) {}
}
