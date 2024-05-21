import PageObject from '../PageObject';

class CartPage extends PageObject {
  url = '/cart.html';

  assertProductInCart(product) {
    cy.contains('tr', product).should('be.visible');
  }

  placeOrder() {
    cy.contains('button', 'Place Order').click();
  }

  fillOrderForm(details) {
    cy.get('#name').type(details.name);
    cy.get('#country').type(details.country);
    cy.get('#city').type(details.city);
    cy.get('#card').type(details.card);
    cy.get('#month').type(details.month);
    cy.get('#year').type(details.year);
  }

  purchase() {
    cy.contains('button', 'Purchase').click();
  }

  assertOrderData() {
    cy.contains('Id').should('be.visible');
    cy.contains('Amount').should('be.visible');
    cy.contains('Card Number').should('be.visible');
  }

  confirmOrder() {
    cy.contains('button', 'OK').click();
  }
}

export default CartPage;
