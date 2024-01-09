import PageObject from '../PageObject';

class CartPage extends PageObject {
  url = '/cart.html';

  nameOfProduct(name) {
    cy.contains('#tbodyid', name).should('be.visible');
  }

  get placeOrderButton() {
    return cy.get('[type="button"]').contains('Place Order');
  }

  clickOnPlaceOrder() {
    this.placeOrderButton.click();
  }
};
export default CartPage;
