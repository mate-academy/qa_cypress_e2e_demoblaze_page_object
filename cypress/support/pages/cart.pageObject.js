import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  productInTheCart(product) {
    cy.get('#tbodyid').should('contain', product);
  }

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnThePlaceOrderBtn() {
    this.placeOrderBtn.click();
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

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCountry(country) {
    this.countryField.type(country, { force: true });
  }

  typeCity(city) {
    this.cityField.type(city, { force: true });
  }

  typeCard(creditCard) {
    this.creditCardField.type(creditCard, { force: true });
  }

  typeMonth(month) {
    this.monthField.type(month, { force: true });
  }

  typeYear(year) {
    this.yearField.type(year, { force: true });
  }

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  clickOnThePurchaseBtn() {
    this.purchaseBtn.click();
  }

  get successfulPurchaseMessage() {
    return cy.get('.sweet-alert');
  }

  assertSuccessfulPurcheseMessage(data) {
    this.successfulPurchaseMessage.should('contain', data);
  }

  get okBtn() {
    return cy.contains('.btn', 'OK');
  }

  clickOnTheOkBtn() {
    this.okBtn.click();
  }
}

export default CartPageObject;
