import PageObject from '../PageObject';

class CartPage extends PageObject {
  get nameField() {
    return cy.get('#name');
  }

  get countryField() {
    return cy.get('#country');
  }

  get cityField() {
    return cy.get('#city');
  }

  get cardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  get placeOrderButton() {
    return cy.contains('.btn', 'Place Order');
  }

  get purchaseButton() {
    return cy.contains('.btn', 'Purchase');
  }

  get okConfirmButton() {
    return cy.get('.confirm');
  }

  assertConfirmText(text) {
    return cy.get('.sweet-alert')
      .should('contain.text', text);
  }

  assertAmount(amount) {
    return cy.get('.sweet-alert')
      .should('contain.text', `Amount: ${amount}`);
  }

  assertCard(card) {
    return cy.get('.sweet-alert')
      .should('contain.text', `Card Number: ${card}`);
  }

  assertName(name) {
    return cy.get('.sweet-alert')
      .should('contain.text', `Name: ${name}`);
  }

  assertDate(date) {
    return cy.get('.sweet-alert')
      .should('contain.text', `Date: ${date}`);
  }
}

export default CartPage;
