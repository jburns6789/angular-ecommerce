import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailsComponent } from './cart-details.component';

describe('CartDetailsComponent', () => {
  let component: CartDetailsComponent;
  let fixture: ComponentFixture<CartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*
Arrange, Act, Assert

describe(string, function) functions take a title and a function containing one 
or more specs and are also known as a suite or test suite.

it(string, function) functions take a title and a function containing one or more 
expectations and are also known as specs.

expect(actual) functions take a value, called an actual. An expect function is 
typically used alongside a matcher function. Together they return a boolean value 
that depicts the passing or failing of a spec.

Matcher functions take a value that represents the expected value. A matcher 
function is chained alongside an expect function. Together they return a boolean 
value that depicts the passing or failing of a spec. Some examples of matchers 
are toBeTruthy(), toEqual(), and toContain().

Trying to test

incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem){
    this.cartService.remove(theCartItem);
  }

*/
