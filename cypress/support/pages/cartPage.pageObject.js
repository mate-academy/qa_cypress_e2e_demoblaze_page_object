import PageObject from '../PageObject';

class CartPage extends PageObject {
  get productsList() {
    return cy.get('#tbodyid');
  }

  get placeOrderBtn() {
    return cy.contains('Place Order');
  }

  get deleteBtn() {
    return cy.contains('Delete');
  }
}

export default CartPage;
