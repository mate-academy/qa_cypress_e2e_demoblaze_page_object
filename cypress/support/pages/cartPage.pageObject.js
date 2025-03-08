import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/index.html';

  assertProductInCart(productName) {
    cy.get('td').should('contain.text', productName);
  }

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnPlaceOrderBtn() {
    this.placeOrderBtn.click();
  }
}

export default CartPageObject;
