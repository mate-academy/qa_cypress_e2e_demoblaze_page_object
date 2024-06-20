import PageObject from '../PageObject';

class PageOrderForm extends PageObject {
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

  get creditCardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  typeName(name) {
    this.nameField.type(name);
  }

  typeCountry(country) {
    this.countryField.type(country);
  }

  typeCity(city) {
    this.cityField.type(city);
  }

  typeCreditCard(card) {
    this.creditCardField.type(card);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year);
  }

  get purchaseButton() {
    return cy.get('[onclick="purchaseOrder()"]');
  }

  clickOnPurchaseButton() {
    this.purchaseButton.click();
  }

  get successfulPurchaseMessage() {
    return cy.get('.sweet-alert');
  }

  assertSuccessfulPurcheseMessage(data) {
    this.successfulPurchaseMessage.should('contain', data);
  }

  get buttonOK() {
    return cy.contains('[class="confirm btn btn-lg btn-primary"]', 'OK');
  }

  clickOnOkAfterPurchase() {
    this.buttonOK.click();
  }
};

export default PageOrderForm;
