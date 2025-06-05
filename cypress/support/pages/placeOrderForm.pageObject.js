import PageObject from '../PageObject';

class PlaceOrderFormPageObject extends PageObject {
  url = '/cart.html';

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

  get closeButton() {
    return cy.contains('button', 'Close');
  }

  get purchaseButton() {
    return cy.contains('button', 'Purchase');
  }

  get purchaseConfirmationMessage() {
    return cy.contains('h2', 'Thank you for your purchase!');
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCounty(country) {
    this.countryField.type(country, { force: true });
  }

  typeCity(city) {
    this.cityField.type(city, { force: true });
  }

  typeCard(card) {
    this.cardField.type(card, { force: true });
  }

  typeMonth(month) {
    this.monthField.type(month, { force: true });
  }

  typeYear(year) {
    this.yearField.type(year, { force: true });
  }

  clickOnCloseBtn() {
    this.closeButton.click();
  }

  clickOnPurchaseBtn() {
    this.purchaseButton.click();
  }

  confirmationMessage() {
    this.purchaseConfirmationMessage.should('be.visible');
  }
}

export default PlaceOrderFormPageObject;
