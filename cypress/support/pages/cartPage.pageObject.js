import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  assertProductInCart (productName) {
    cy.contains('.success', productName);
  }

  clickPlaceOrder() {
    cy.contains('.btn', 'Place Order')
      .click();
  }

  get countryField() {
    return cy.get('#country');
  }

  get nameField() {
    return cy.get('#name');
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

  typeCountry(country) {
    this.countryField.type(country);
  }

  typeName(name) {
    this.nameField.type(name);
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

  clickPurchaseButton() {
    cy.contains('.btn', 'Purchase')
      .click();
  }

  assertName(name) {
    cy.contains('.lead', `Name: ${name}`);
  }

  clickConfirmOrder() {
    cy.contains('.confirm', 'OK')
      .click();
  }
}

export default CartPageObject;
