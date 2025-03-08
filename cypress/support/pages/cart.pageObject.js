import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  assertProduct(product) {
    cy.get('.success').should('contain', product);
  }

  clickOnPlaceOrder() {
    cy.contains('.btn', 'Place Order').click();
  }
}

export default CartPageObject;
