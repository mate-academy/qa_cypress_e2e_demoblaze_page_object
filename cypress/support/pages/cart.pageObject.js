import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  get productTable() {
    return cy.get('[class="table-responsive"]');
  }

  get sweetAlert() {
    return cy.get('[class="sweet-alert  showSweetAlert visible"]');
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

  assertProductInCart(product) {
    this.productTable
      .should('contain', product);
  }

  clickOnButton(button) {
    cy.contains('.btn', button)
      .click();
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

  typeCreditCard(creditCard) {
    this.creditCardField.type(creditCard);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year);
  }

  assertName(name) {
    this.sweetAlert
      .should('contain', name);
  }

  assertCreditCard(creditCard) {
    this.sweetAlert
      .should('contain', creditCard);
  }

  assertSuccessMessage(successMessage) {
    this.sweetAlert
      .should('contain', successMessage);
  }
}

export default CartPageObject;
