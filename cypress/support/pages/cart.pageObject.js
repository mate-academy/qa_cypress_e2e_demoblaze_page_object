import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  get creditCardField() {
    return cy.get('#card');
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

  get yearField() {
    return cy.get('#year');
  }

  get monthField() {
    return cy.get('#month');
  }

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get okBtn() {
    return cy.contains('.confirm', 'OK');
  }

  get closeBtn() {
    return cy.get('#orderModal .btn-secondary');
  }

  itemIsInCart(productName) {
    cy.get('.success').within(() => {
      cy.contains('td', productName).should('be.visible');
    });
  }

  placeOrderBtn() {
    cy.contains('button', 'Place Order').click();
  }

  purchaseOrderBtn() {
    this.purchaseBtn.click();
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCity(city) {
    this.cityField.type(city, { force: true });
  }

  typeYear(year) {
    this.yearField.type(year, { force: true });
  }

  typeMonth(month) {
    this.monthField.type(month, { force: true });
  }

  typeCreditCardNum(number) {
    this.creditCardField.type(number, { force: true });
  }

  typeCountry(country) {
    this.countryField.type(country, { force: true });
  }

  pressOkBtn() {
    this.okBtn.click();
  }

  closePurchaseForm() {
    this.closeBtn.click({ force: true });
  }

  assertSuccessfulPurchase() {
    cy.contains('h2', 'Thank you for your purchase!').should('be.visible');
  }

  assertPurchaseInfo(field, value) {
    cy.contains('.lead.text-muted ', `${field}: ${value}`);
  }
}

export default CartPageObject;
