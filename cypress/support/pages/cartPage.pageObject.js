import PageObject from '../PageObject';

class CartPagePageObject extends PageObject {
  url = '/cart.html';

  get prodTable() {
    return cy.get('#tbodyid');
  }

  get placeOrderBtn() {
    return cy.get('.col-lg-1 > .btn');
  }

  clickPlaceOrderBtn() {
    this.placeOrderBtn.click();
  }
}

export default CartPagePageObject;
