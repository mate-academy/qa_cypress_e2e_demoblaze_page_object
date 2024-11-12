import PageObject from '../PageObject';

class CartPageObject extends PageObject {
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

  typeMessage(message) {
    this.messageField.type(message);
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCountryField(country) {
    this.countryField.type(country, { force: true });
  }

  typecityField(city) {
    this.cityField.type(city, { force: true });
  }

  typeCardField(card) {
    this.cardField.type(card, { force: true });
  }

  typeMonthField(month) {
    this.monthField.type(month, { force: true });
  }

  typeYearField(year) {
    this.yearField.type(year, { force: true });
  }

  clickOnPlaceOrderButton() {
    cy.get('.col-lg-1 > .btn').click();
  }

  assertProduct(productName) {
    cy.get('tbody tr').contains(productName).should('exist');
  }

  clickOnPurchaseButton() {
    cy.get('#orderModal > .modal-dialog > ' +
    '.modal-content > .modal-footer > .btn-primary').click();
  }

  assertSuccess() {
    cy.get('h2')
      .should('contain.text', 'Thank you for your purchase!');
  }

  clickOnOkButton() {
    cy.get('.confirm').click();
  }
}

export default CartPageObject;
