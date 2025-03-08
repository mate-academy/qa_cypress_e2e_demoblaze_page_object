import PageObject from '../PageObject';

class PlaceAnOrderPageObject extends PageObject {
  url = '/index.html';

  get emailField() {
    return cy.get('#email');
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

  get messageAllert() {
    return cy.get('.sweet-alert');
  }

  get creditCardField() {
    return cy.get('#card');
  }

  get sendMessageBtn() {
    return cy.contains('.btn', 'Send message');
  }

  get BtnForAddedProduct() {
    return cy.get('[onclick="addToCart(9)"]');
  }

  get BtnForConfirmOrder() {
    return cy.contains('[type=button]', 'Place Order');
  }

  get confirmAllertBtn() {
    return cy.get('.confirm.btn.btn-lg.btn-primary');
  }

  get monthFiedl() {
    return cy.get('#month');
  }

  get yearFiedl() {
    return cy.get('#year');
  }

  get productInCart() {
    return cy.get('.success');
  }

  get purchaseBtn() {
    return cy.get('[onclick="purchaseOrder()"]');
  }

  typeEmail(email) {
    this.emailField.type(email);
  }

  typeCity(city) {
    this.cityField.type(city);
  }

  typeName(name) {
    this.nameField.type(name);
  }

  typeCountry(country) {
    this.countryField.type(country);
  }

  typeCreditCard(creditCard) {
    this.creditCardField.type(creditCard);
  }

  typeMonth(month) {
    this.monthFiedl.type(month);
  }

  typeYear(year) {
    this.yearFiedl.type(year);
  }

  clickOnSendMessageBtn() {
    this.sendMessageBtn.click();
  }

  clickOnAddToCartBtn() {
    this.BtnForAddedProduct.click();
  }

  ensureProductInCart(product) {
    this.productInCart.should('contain', product);
  }

  openPlaceOrderForm() {
    this.BtnForConfirmOrder.should('exist', { delay: 15000 }).click();
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  ensureSuccessAlert(successMessage) {
    this.messageAllert.should('contain', successMessage);
  }

  sumbitSuccessModal() {
    this.confirmAllertBtn.click();
  }
}

export default PlaceAnOrderPageObject;
