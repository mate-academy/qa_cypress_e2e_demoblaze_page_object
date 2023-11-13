import PageObject from '../PageObject';
class CartPageObject extends PageObject {
  url = '/cart.html';

  get productInCart() {
    return cy.get('#tbodyid');
  }

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  assertProductInCart(productName) {
    this.productInCart.should('contain', productName);
  }

  clickOnPlaceOrder() {
    this.placeOrderBtn.click();
  }
}

export default CartPageObject;
