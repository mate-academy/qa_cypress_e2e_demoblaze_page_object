import PageObject from './pageObject';

class CheckoutPage extends PageObject {
  fillForm({ name, country, city, card, month, year }) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  purchase() {
    cy.contains('Purchase').click();
  }

  assertModalData(name, card) {
    cy.get('.sweet-alert').should('contain.text', name);
    cy.get('.sweet-alert').should('contain.text', card);
  }

  confirm() {
    cy.contains('OK').click();
  }
}

export default CheckoutPage;
