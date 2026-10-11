import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  assertProductInCart(product) {
    cy.get('#tbodyid tr', { timeout: 10000 })
      .should('have.length.greaterThan', 0)
      .and('contain', product);
  }

  clickOnPlaceOrderBtn() {
    cy.contains('button', 'Place Order').click();
  }
}

export default CartPageObject;
