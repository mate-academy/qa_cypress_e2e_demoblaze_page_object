import PageObject from '../PageObject';

class CheckoutFormPageObject extends PageObject {
  fillForm({ name, country, city, card, month, year }) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  clickPurchase() {
    cy.contains('button', 'Purchase').click();
  }

  assertConfirmationContains(name) {
    cy.get('.sweet-alert').should('contain.text', name);
  }

  clickOk() {
    cy.contains('button', 'OK').click();
  }
}

export default CheckoutFormPageObject;
