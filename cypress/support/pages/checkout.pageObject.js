import PageObject from '../PageObject';

class CheckoutPageObject extends PageObject {
  url = '/index.html';

  get emailField() {
    return cy.get('#recipient-email');
  }

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

  typeEmail(email) {
    this.emailField.type(email, { force: true });
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCoutry(country) {
    this.countryField.type(country, { force: true });
  }

  typeCity(city) {
    this.cityField.type(city, { force: true });
  }

  typeCreditCard(creditCard) {
    this.creditCardField.type(creditCard, { force: true });
  }

  typeMonth(month) {
    this.monthField.type(month, { force: true });
  }

  typeYear(year) {
    this.yearField.type(year, { force: true });
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnPlaceOrderBtn() {
    this.placeOrderBtn.click();
  }

  get allert() {
    return cy.get('.sweet-alert > h2');
  }

  get confirmation() {
    return cy.get('.lead');
  }

  get okBtn() {
    return cy.contains('.btn', 'OK');
  }

  clickOnOkBtn() {
    this.okBtn.click();
  }
}

export default CheckoutPageObject;
