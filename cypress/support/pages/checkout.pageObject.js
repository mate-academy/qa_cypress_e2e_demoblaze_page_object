/* eslint-disable cypress/no-unnecessary-waiting */
import PageObject from '../PageObject';

class CheckoutPageObject extends PageObject {
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

  clickOnPurchaseButton() {
    cy.contains('button', 'Purchase').click();
  }

  clickOnPlaceOrderButton() {
    cy.contains('button', 'Place Order').click();
  }

  assertProductInTheCart(product) {
    cy.get('.table-responsive').should('contain', product);
  }

  assertEnteredDataIsShown(name, card) {
    cy.get('.sweet-alert').should('contain', name).and('contain', card);
  }

  clickOnOkButton() {
    cy.get('.confirm').click();
  }

  assertAlertIsNotVisible() {
    cy.get('.sweet-alert').should('not.be.visible');
  }

  wait() {
    cy.wait(1000);
  }
}

export default CheckoutPageObject;
