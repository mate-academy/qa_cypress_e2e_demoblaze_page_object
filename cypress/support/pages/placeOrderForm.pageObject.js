import PageObject from '../PageObject';

class OrderFormPageObject extends PageObject {
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

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get OkBtn() {
    return cy.contains('.btn', 'OK');
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

  typeCard(card) {
    this.creditCardField.type(card);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year);
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  clickOnOkBtn() {
    this.OkBtn.click();
  }

  assertModal(userInfo) {
    cy.get('.lead').should('contain', userInfo);
  }
}

export default OrderFormPageObject;
