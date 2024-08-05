import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  get cartItems() {
    return cy.get('#tbodyid .success');
  }

  assertProductInCart(productName) {
    this.cartItems.contains(productName).should('be.visible');
  }

  clickPlaceOrder(buttonName) {
    cy.contains('button', buttonName).click();
  }
}

export default CartPageObject;
