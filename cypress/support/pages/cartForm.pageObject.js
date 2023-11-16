import PageObject from '../PageObject';

class CartFormObject extends PageObject {
  url = '/cart.html';

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get nameField() {
    return cy.get('input[id="name"]');
  }

  get countryField() {
    return cy.get('input[id="country"]');
  }

  get cityField() {
    return cy.get('input[id="city"]');
  }

  get cardField() {
    return cy.get('input[id="card"]');
  }

  get monthField() {
    return cy.get('input[id="month"]');
  }

  get yearField() {
    return cy.get('input[id="year"]');
  }

  clickOnPurchaseButton() {
    this.purchaseBtn.click();
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

  checkName(name) {
    this.nameField.should('have.value', name);
  }

  checkCountry(country) {
    this.countryField.should('have.value', country);
  }

  checkCity(city) {
    this.cityField.should('have.value', city);
  }

  checkCard(card) {
    this.cardField.should('have.value', card);
  }

  checkMonth(month) {
    this.monthField.should('have.value', month);
  }

  checkYear(year) {
    this.yearField.should('have.value', year);
  }

  assertConfirmationMessageVisible() {
    cy.contains('Thank you for your purchase!').should('be.visible');
  }
}

export default CartFormObject;
