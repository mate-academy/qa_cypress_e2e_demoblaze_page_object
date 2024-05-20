import PageObject from '../PageObject';

class CartPage extends PageObject {
  get productsList() {
    return cy.get('#tbodyid');
  }

  get placeOrderBtn() {
    return cy.contains('Place Order');
  }
}

export default CartPage;
