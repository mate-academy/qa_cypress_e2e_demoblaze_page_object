import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  clickOnPlaceOrderBtn() {
    cy.contains('.btn', 'Place Order')
      .click();
  }

  typeName(name) {
    cy.get('#name').type(name);
  }

  typeCountry(country) {
    cy.get('#country').type(country);
  }

  typeCity(city) {
    cy.get('#city').type(city);
  }

  typeCreditCard(creditCard) {
    cy.get('#card').type(creditCard);
  }

  typeMonth(month) {
    cy.get('#month').type(month);
  }

  typeYear(year) {
    cy.get('#year').type(year);
  }

  get yearField() {
    return cy.get('#year');
  }

  clickOnPurchaseBtn() {
    cy.contains('.btn', 'Purchase')
      .click();
  }

  get addedProduct() {
    return cy.get('#tbodyid');
  }

  get confirmModal() {
    return cy.get('.sweet-alert');
  }

  clickOnOkBtn() {
    cy.contains('.btn', 'OK')
      .click();
  }
}

export default CartPageObject;
