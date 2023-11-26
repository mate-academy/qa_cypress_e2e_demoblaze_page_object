import PageObject from '../PageObject';

class PlaceOrderFormPageObject extends PageObject {
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

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  assertCardNumber(cardNumber) {
    cy.get('.lead')
      .should('contain', cardNumber);
  }

  assertName(name) {
    cy.get('.lead')
      .should('contain', name);
  }

  get clickOnOKBtn() {
    return cy.contains('.confirm', 'OK');
  }
}
export default PlaceOrderFormPageObject;
