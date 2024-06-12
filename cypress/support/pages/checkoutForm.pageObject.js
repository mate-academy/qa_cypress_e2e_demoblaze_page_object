import PageObject from '../PageObject';

class CheckoutFormPageObject extends PageObject {
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

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get okBtn() {
    return cy.contains('.confirm.btn', 'OK');
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCountry(country) {
    this.countryField.type(country, { force: true });
  }

  typeCity(city) {
    this.cityField.type(city);
  }

  typeCreditCard(creditCard) {
    this.creditCardField.type(creditCard);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year);
  }

  clickOnPurchase() {
    this.purchaseBtn.click();
  }

  clickOnOk() {
    this.okBtn.click();
  }

  assertModalMessage(message) {
    cy.get('h2')
      .should('contain', message);
  }
}

export default CheckoutFormPageObject;
