import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  get cartItemNames() {
    return cy.get('#tbodyid tr td:nth-child(2)');
  }

  verifyProductInCart(productName) {
    this.cartItemNames.should('contain.text', productName);
  }

  clickPlaceOrder() {
    cy.contains('button', 'Place Order').click();
  }
}

export default CartPageObject;
