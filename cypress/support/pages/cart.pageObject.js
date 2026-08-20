import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  assertProductInCart(productName) {
    cy.contains('#tbodyid td', productName)
      .should('be.visible');
  }

  clickOnPlaceOrderBtn() {
    this.placeOrderBtn.click();
  }
}

export default CartPageObject;
