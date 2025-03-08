import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/index.html';

  get nameField() {
    return cy.get('#name');
  }

  get country() {
    return cy.get('#country');
  }

  get city() {
    return cy.get('#city');
  }

  get Creditcard() {
    return cy.get('#card');
  }

  get month() {
    return cy.get('#month');
  }

  get year() {
    return cy.get('#year');
  }

  get PurchaseBtn() {
    return cy.contains('button', 'Purchase');
  }

  get PlaceOrderBtn() {
    return cy.contains('button', 'Place Order');
  }

  get AssertOkBtn() {
    return cy.get('.sweet-alert').contains('button', 'OK');
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCountry(country) {
    this.country.type(country);
  }

  typeCity(city) {
    this.city.type(city);
  }

  typeCreditCard(Creditcard) {
    this.Creditcard.type(Creditcard);
  }

  typeMonth(month) {
    this.month.type(month);
  }

  typeYear(year) {
    this.year.type(year);
  }

  clickOnPurchaseBtn() {
    this.PurchaseBtn.click();
  }

  addToTheCartBtn() {
    cy.contains('.btn', 'Add to cart').click();
  }

  assertProductIsIntheCart(product) {
    cy.contains('tr', product).contains(product);
  }

  clickPlaceOrder() {
    this.PlaceOrderBtn.click();
  }

  assertEnteredDataIsInmodal(testData) {
    cy.get('.sweet-alert').contains(testData.name);
    cy.get('.sweet-alert').contains(testData.creditCard);
  }

  clickAssertOkBtn() {
    this.AssertOkBtn.click();
  }
}

export default CartPageObject;
