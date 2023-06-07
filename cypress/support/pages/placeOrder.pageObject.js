import PageObject from '../PageObject';

class PlaceOrderPageObject extends PageObject {
  url = '/index.html';

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

  get purchaseButton() {
    return cy.contains('.btn', 'Purchase');
  }

  assertPurchaseCard(card) {
    cy.get('.lead')
      .should('contain', card);
  }

  assertPurchaseName(name) {
    cy.get('.lead')
      .should('contain', name);
  }

  get submitPurchaseButton() {
    return cy.contains('.btn', 'OK');
  }
}

export default PlaceOrderPageObject;
