export abstract class Product {
  constructor(
    public guid: string,
    public name: string,
    private _price: number
  ) {}

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price < 0 ? this.price : price;
  }
}
