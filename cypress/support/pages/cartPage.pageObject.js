import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/index.html';

  clickOrderBtn() {
    return cy.contains('.btn', 'Place Order').click();
  }

  fillTheNameField(name) {
    cy.get('#name').type(name);
  }

  fillTheCountryField(country) {
    cy.get('#country').type(country);
  }

  fillTheCityField(city) {
    cy.get('#city').type(city);
  }

  fillTheCreditCardField(creditCard) {
    cy.get('#card').type(creditCard);
  }

  fillTheMonthField(month) {
    cy.get('#month').type(month);
  }

  fillTheYearField(year) {
    cy.get('#year').type(year);
  }

  clickPurchaseBtn() {
    return cy.contains('.btn', 'Purchase').click();
  }

  get orderAssert() {
    return cy.get('h2');
  }

  clickOkBtn() {
    return cy.contains('.btn', 'OK').click();
  }

  assertProduct(productName) {
    cy.get('.table').should('contain', productName);
  }

  assertOrderConfirmation(expectedMessage) {
    cy.get('h2').should('contain', expectedMessage);
  }

  assertCardNumber(cardNumber) {
    cy.get('.lead').should('contain', cardNumber);
  }

  assertName(name) {
    cy.get('.lead').should('contain', name);
  }
}

export default CartPageObject;
