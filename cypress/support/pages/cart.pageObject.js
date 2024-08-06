import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  get cartItems() {
    return cy.get('#tbodyid .success');
  }

  assertProductInCart(productName) {
    this.cartItems.contains(productName).should('be.visible');
  }

  clickPlaceOrderButton() {
    cy.contains('button', 'Place Order').click();
  }
}

export default CartPageObject;
