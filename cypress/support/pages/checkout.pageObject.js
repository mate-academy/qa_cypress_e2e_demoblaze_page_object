import PageObject from '../PageObject';

class CheckoutpageObject extends PageObject {
  url = '/cart.html';
  assertProductInCart (product) {
    cy.get('.table-responsive').should('contain', product);
  }
  waiter () {
    cy.wait(1000);
  }
  clickOnPlaceOrderBtn () {
    cy.contains('button', 'Place Order').click();
  }
  clickOnPlaceOrderBtn2 () {
    cy.contains('button', 'Purchase').click();
  }
  assertEnteredDataIsShown(name, card) {
    cy.get('.sweet-alert').should('contain', name).and('contain', card);
  }
  clickOnPlaceOrderBtn3 () {
    cy.contains('button', 'OK').click();
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
    this.nameField.type(name, { force: true });
  }
  typeCountry(country) {
    this.countryField.type(country, { force: true });
  }
  typeCity(city) {
    this.cityField.type(city, { force: true });
  }
  typeCard(card) {
    this.cardField.type(card, { force: true });
  }
  typeMonth(month) {
    this.monthField.type(month, { force: true });
  }
  typeYear(year) {
    this.yearField.type(year, { force: true });
  }
}

export default CheckoutpageObject;
