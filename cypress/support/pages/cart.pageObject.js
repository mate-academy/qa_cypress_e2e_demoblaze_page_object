import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';
  get placeOrderBtn() {
    return cy.get('button').contains('Place Order');
  }
}

export default CartPageObject;
