export class Inventory {
  constructor(
    public readonly idInventory: number,
    public idProduct: number,
    public batch: string,
    public amount: number,
	public expirationDate: Date
  ) {}
}
