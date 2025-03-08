import PageObject from '../PageObject';

class OrderFormPageObject extends PageObject {
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

  get confirmModalBtn() {
    return cy.contains('.confirm', 'OK');
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
    this.cardField.type(card);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typYear(year) {
    this.yearField.type(year);
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  assertCardNumberInModal(card) {
    cy.get('.lead').should('contain.text', card);
  }

  assertNameInModal(name) {
    cy.get('.lead').should('contain.text', name);
  }

  clickOnConfirmModalBtn() {
    this.confirmModalBtn.click();
  }
}

export default OrderFormPageObject;
