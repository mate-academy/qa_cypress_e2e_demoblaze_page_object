import PageObject from '../PageObject';

class CheckoutPageObject extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }

  clickOnButton(button) {
    cy.contains('.btn', button)
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

  get sweetAlert() {
    return cy.get('[class="sweet-alert  showSweetAlert visible"]');
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCountry(country) {
    this.countryField.type(country, { force: true });
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

  get successAlert() {
    return cy.contains('.sweet-alert');
  }

  get productTable() {
    return cy.get('[class="table table-bordered table-hover table-striped"]');
  }

  assertProductName(name) {
    this.productTable
      .should('contain', name);
  }

  assertAlertMessage(name) {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
  }

  assertMessage(message) {
    this.sweetAlert
      .should('contain', message);
  }

  assertCreditCard(card) {
    this.sweetAlert
      .should('contain', card);
  }

  assertName(name) {
    this.sweetAlert
      .should('contain', name);
  }

  assertEmptyCart() {
    cy.get('.cart-item').should('not.exist');
  }
}

export default CheckoutPageObject;
