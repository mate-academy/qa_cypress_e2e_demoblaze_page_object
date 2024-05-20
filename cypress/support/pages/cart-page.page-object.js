import PageObject from "../PageObject";

class CartPageObject extends PageObject {
  url = 'cart.html';

  get cartTable() {
    return cy.get('.table-responsive');
  }

  getPlaceOrderBtn(placeOrderBtn) {
    return cy.contains('.btn', placeOrderBtn);
  }
}

export default CartPageObject;
