import PageObject from '../PageObject';

class PlaceOrderFromPajeObject extends PageObject {
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

  get modal() {
    return cy.get('.sweet-alert');
  }

  get okBtn() {
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
    this.cardField.type(card);
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

  checkCardNumber(card) {
    this.modal.should('contain', `Card Number: ${card}`);
  }

  checkName(name) {
    this.modal.should('contain', `Name: ${name}`);
  }

  clickOK() {
    this.okBtn.click();
  }
};

export default PlaceOrderFromPajeObject;
