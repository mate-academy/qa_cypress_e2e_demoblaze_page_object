import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  get productTitle() {
    return cy.get('td');
  }

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
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

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get modal() {
    return cy.get('.lead');
  }

  get okBtn() {
    return cy.contains('.btn', 'OK');
  }

  assertProduct(product) {
    this.productTitle.should('contain', product);
  }

  clickOnPlaceOrderBtn() {
    this.placeOrderBtn.click();
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

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  assertDataInModal(data) {
    this.modal.should('contain', data);
  }

  clickOnOkBtn() {
    this.okBtn.click();
  }
}

export default CartPageObject;