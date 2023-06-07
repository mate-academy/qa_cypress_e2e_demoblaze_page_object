import PageObject from '../PageObject';

class CartPageObject {
  url = '/index.html';

  assertProduct(productName) {
    cy.contains('#tbodyid', productName).should('exist');
  }

  get placeOrderButton() {
    return cy.contains('.btn', 'Place Order');
  }
}

export default CartPageObject;
