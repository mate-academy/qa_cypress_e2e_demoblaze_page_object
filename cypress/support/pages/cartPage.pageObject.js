import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnPurchaseButton() {
    this.placeOrderBtn.click();
  }
}

export default CartPageObject;
