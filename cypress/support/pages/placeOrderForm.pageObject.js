import PageObject from '../PageObject';

class PlaceOrderFormPageObject extends PageObject {
  url = '/index.html';

  get nameField() {
    return cy.get('#name');
  };

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

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  assertCardNumber(cardNumber) {
    cy.get('.sweet-alert')
      .should('contain', cardNumber);
  }

  assertName(name) {
    cy.get('.sweet-alert')
      .should('contain', name);
  }

  assertAmount(amount) {
    cy.get('.sweet-alert')
      .should('contain', amount);
  }

  get okBtn() {
    return cy.contains('.confirm', 'OK');
  }
}

export default PlaceOrderFormPageObject;
