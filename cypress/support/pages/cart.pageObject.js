import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';
  clickOnPlaceOrderButton() {
    cy.get('.btn').contains('Place Order').click();
  }

  findProductInCart(productName) {
    return cy.get('.success').contains(productName);
  }

  get nameField() {
    return cy.get('#name');
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  get countryField() {
    return cy.get('#country');
  }

  typeCountry(country) {
    this.countryField.type(country, { force: true });
  }

  get cityField() {
    return cy.get('#city');
  }

  typeCity(city) {
    this.cityField.type(city, { force: true });
  }

  get creditCardField() {
    return cy.get('#card');
  }

  typeCreditCard(creditCard) {
    this.creditCardField.type(creditCard, { force: true });
  }

  get monthField() {
    return cy.get('#month');
  }

  typeMonth(month) {
    this.monthField.type(month, { force: true });
  }

  get yearField() {
    return cy.get('#year');
  }

  typeYear(year) {
    this.yearField.type(year, { force: true });
  }

  clickOnPurchaseButton() {
    cy.get('button').contains('Purchase').click();
  }

  clickOnOkButton() {
    cy.get('button').contains('OK').click();
  }
}
export default CartPageObject;
