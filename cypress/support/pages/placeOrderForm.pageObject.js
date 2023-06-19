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

  get creditCardField() {
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

  get successPurchaseWind () {
    return cy.get('.sweet-alert');
  }

  assertCardNumber(creditcard) {
    cy.get('.lead').should('contain', creditcard);
  }

  assertName(name) {
    cy.get('.lead').should('contain', name);
  }

  get OKButton() {
    return cy.contains('.confirm', 'OK');
  }
}

export default PlaceOrderFormPageObject;
