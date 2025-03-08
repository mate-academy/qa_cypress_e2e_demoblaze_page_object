import PageObject from '../PageObject';

class CartAndPlaceOrderPageObject extends PageObject {
  url = '/cart.html';

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  get nameField() {
    return cy.get('#name');
  }

  get cityField() {
    return cy.get('#city');
  }

  get countryField() {
    return cy.get('#country');
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

  get modalSuccessOrder() {
    return cy.get('.lead');
  }

  verifyProductInCart(product) {
    cy.get('.success').should('contain', product);
  }

  clickplaceOrderBtn() {
    this.placeOrderBtn.click();
  }

  typeName(name) {
    this.nameField.type(name);
  }

  typeCity(city) {
    this.cityField.type(city);
  }

  typeCountry(country) {
    this.countryField.type(country);
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

  clickPurchaseBtn() {
    this.purchaseBtn.click();
  }

  verifyModalSuccessOrder(name, card) {
    this.modalSuccessOrder.should('contain', name)
      .and('contain', card);
  }

  typeOkBtn() {
    cy.get('.confirm').click();
  }
}

export default CartAndPlaceOrderPageObject;
