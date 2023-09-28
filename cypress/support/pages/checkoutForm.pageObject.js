import PageObject from '../PageObject';

class CheckoutForm extends PageObject {
  assertProduct(productName) {
    cy.get('.table')
      .should('contain', productName);
  };

  addName(name) {
    cy.get('#name')
      .type(name);
  };

  addCountry(country) {
    cy.get('#country')
      .type(country);
  };

  addCity(city) {
    cy.get('#city')
      .type(city);
  };

  addCard(card) {
    cy.get('#card')
      .type(card);
  };

  addMonth(month) {
    cy.get('#month')
      .type(month);
  };

  addYear(year) {
    cy.get('#year')
      .type(year);
  };
};

export default CheckoutForm;
