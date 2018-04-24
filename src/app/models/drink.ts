import { Product } from './product';

export class Drink extends Product {
  constructor(
    public guid: string,
    public name: string,
    public price: number,
    public volume: string
  ) {
    super(guid, name, price);
  }
}
