import PageObject from '../PageObject';

class CartPagePageObject extends PageObject {
  url = '/cart.html';

  get nameField() {
    return cy.get('#name');
  }

  get countryField() {
    return cy.get('#country');
  }

  get cytiField() {
    return cy.get('#city');
  }

  get creditCartField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  clickOnPlaceOrderButton() {
    cy.contains('.btn', 'Place Order').click();
  }

  clickOnPurchaseButton() {
    cy.contains('.btn.btn-primary', 'Purchase').click();
  }

  typeInNameField(name) {
    this.nameField.type(name);
  }

  typeInCountryField(country) {
    this.countryField.type(country);
  }

  typeInCytiField(city) {
    this.cytiField.type(city);
  }

  typeInCreditCartField(creditCart) {
    this.creditCartField.type(creditCart);
  }

  typeInMonthField(month) {
    this.monthField.type(month);
  }

  typeInYearField(year) {
    this.yearField.type(year);
  }

  assertPurchaseSuccess() {
    cy.get('.sweet-alert').should(
      'contain.text',
      'Thank you for your purchase!'
    );
  }
}

export default CartPagePageObject;
