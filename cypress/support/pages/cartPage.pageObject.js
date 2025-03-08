import PageObject from '../PageObject';

class CartPage extends PageObject {
  url = '/cart.html';
  get placeOrderBtn() {
    return cy.contains('button', 'Place Order');
  }

  clickOnPlaceOrderBtn() {
    this.placeOrderBtn.click();
  }
}

export default CartPage;
