import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnPurchaseButton() {
    // eslint-disable-next-line cypress/no-force
    cy.get('[class="btn btn-success"]').click({ force: true });
  }
}

export default CartPageObject;
