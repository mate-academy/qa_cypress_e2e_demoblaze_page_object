import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  findProductInTheCart(productName) {
    return cy.contains('.success td', productName);
  }

  clickOnPlaceOrderButton() {
    cy.contains('button', 'Place Order').click();
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

  get purchaseButton() {
    return cy.contains('button', 'Purchase');
  }

  get okButton() {
    return cy.contains('button', 'OK');
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

  typeCreditCard(creditCard) {
    this.creditCardField.type(creditCard, { force: true });
  }

  typeMonth(month) {
    this.monthField.type(month, { force: true });
  }

  typeYear(year) {
    this.yearField.type(year, { force: true });
  }

  clickOnPurchaseButton() {
    this.purchaseButton.click();
  }

  clickOnOkButton() {
    this.okButton.click();
  }
}

export default CartPageObject;
