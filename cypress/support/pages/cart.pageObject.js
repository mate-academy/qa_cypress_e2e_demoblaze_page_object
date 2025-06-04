import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  assertProductInCart(productName) {
    cy.get('#tbodyid tr').should('contain', productName);
  }

  placeOrder() {
    cy.contains('Place Order').click();
  }
}

export default CartPageObject;
