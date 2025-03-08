import PageObject from './PageObject';
/// <reference types='cypress' />

class CheckoutPageObject extends PageObject {
  url = '/cart.html';
  assertProductInCart(product) {
    cy.get('.table-responsive').should('contain', product);
  }

  fillNameField(name) {
    cy.get('#name').type(name);
  }

  fillCountryField(country) {
    cy.get('#country').type(country);
  }

  fillCityField(city) {
    cy.get('#city').type(city);
  }

  fillCardField(card) {
    cy.get('#card').type(card);
  }

  fillMonthField(month) {
    cy.get('#month').type(month);
  }

  fillYearField(year) {
    cy.get('#year').type(year);
  }

  assertPurchase(value) {
    cy.get('.sweet-alert > h2').should('contain', value);
  }

  checkOrder(value) {
    cy.get('.lead').should('contain', value);
  }
}

export default CheckoutPageObject;
