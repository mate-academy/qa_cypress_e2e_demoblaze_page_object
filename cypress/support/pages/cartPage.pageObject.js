import PageObject from '../PageObject';

class CartPagePageObject extends PageObject {
  url = '/index.html';

  productAssertInCart(productName) {
    cy.contains('#tbodyid', productName)
      .should('exist');
  }

  get PlaceOrderButton() {
    return cy.contains('.btn', 'Place Order');
  }
}

export default CartPagePageObject;
