import PageObject from '../PageObject';

class CartPagePageObject extends PageObject {
  url = '/index.html';

  assertProductInCart(product) {
    cy.get('.success').should('contain.text', product);
  }

  placeOrder() {
    cy.contains('Place Order').click();
  }
};

export default CartPagePageObject;
