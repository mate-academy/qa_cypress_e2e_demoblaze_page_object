import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  assertProductInCart(productName) {
    cy.contains(productName).should('exist');
  }
  
  placeOrderBtn() {
    cy.contains('.btn', 'Place Order')
      .click();
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

  get cardField() {
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

  typeCard(card) {
    this.cardField.type(card,);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year);
  }

  assertOrder() {
    cy.wait(1000);
    cy.contains('.sweet-alert', 'Thank you for your purchase!')
      .should('exist');
  }

  ClickOnOkBtn() {
    cy.contains('.confirm btn', 'OK')
      .click();
  }

}

export default CartPageObject;