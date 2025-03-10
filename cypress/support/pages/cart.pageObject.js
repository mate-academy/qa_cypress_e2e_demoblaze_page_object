/// <reference types='cypress' />
import PageObject from '../PageObject';

export default class CartPageObjects extends PageObject {
  get cartTableBody() {
    return cy.get('#tbodyid');
  }

  assureCartHasProducts() {
    this.cartTableBody.should('exist');
  }

  assureAddedProductByName(productName) {
    cy.get('#tbodyid td').eq(1)
      .should('contain', productName);
  }

  get placeOrderBtn() {
    return cy.contains('Place Order');
  }

  placeOrder() {
    this.placeOrderBtn.click();
  }
}
