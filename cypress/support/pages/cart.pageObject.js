import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnPlaceOrder() {
    this.placeOrderBtn.click();
  }

  assertProductInCart(productName) {
    cy.get('#tbodyid').contains('td', productName).should('be.visible');
  }
}

export default CartPageObject;
