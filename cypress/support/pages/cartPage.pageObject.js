import PageObject from '../PageObject';

class CartPage extends PageObject {
  url = '/cart.html';

  get placeOrderButton() {
    return cy.get('[type="button"]').contains('Place Order');
  }

  clickOnPlaceOrderButton() {
    this.placeOrderButton.click();
  }

  assertProductInTheCart(name) {
    cy.contains('#tbodyid', name).should('be.visible');
  }
};
export default CartPage;
