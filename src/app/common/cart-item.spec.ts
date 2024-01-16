import { CartItem } from './cart-item';
import { Product } from './product';

describe('CartItem', () => {
  it('should create an instance', () => {
    expect(new CartItem(new Product)).toBeTruthy();
  });
});
