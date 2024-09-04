import PageObject from '../PageObject';

class PlaceOrderObject extends PageObject {
  get cartButton() {
    return cy.get('#cartur');
  }

  get confirmButton() {
    return cy.get('[tabindex="1"]');
  }

  get confirmMessage() {
    return cy.contains('h2', 'Thank you for your purchase!');
  }

  get orderModalButton() {
    return cy.get('[data-target="#orderModal"]');
  }

  get addToCart() {
    return cy.contains('a', 'Add to cart');
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

  get purchaseButton() {
    return cy.contains('.btn', 'Purchase');
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
    this.purchaseButton.click();
  }

  clickOnAddToCartButton() {
    this.addToCart.click();
  }

  clickOnCartButton() {
    this.cartButton.click();
  }

  verifyProductInCart(productName) {
    cy.contains('td', productName).should('exist');
  }

  clickOnOrderModalButton() {
    this.orderModalButton.click();
  }

  verifyConfirmMessage() {
    this.confirmMessage.should('be.visible');
  }

  clickOnConfirmButton() {
    this.confirmButton.click();
  }
}

export default PlaceOrderObject;
