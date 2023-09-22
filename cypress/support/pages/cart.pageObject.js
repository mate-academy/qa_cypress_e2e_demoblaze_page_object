import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/index.html';

  get cartItemName() {
    return cy.get('.success > :nth-child(2)');
  }

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnPlaceOrder() {
    this.placeOrderBtn.click();
  }
}

export default CartPageObject;
