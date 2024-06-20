import PageObject from '../PageObject';

class CheckoutPageObject extends PageObject {
  url = '/index.html';

  fillOrderForm(name, country, city, card, month, year) {
    cy.get('#name')
      .type(name);
    cy.get('#country')
      .type(country);
    cy.get('#city')
      .type(city);
    cy.get('#card')
      .type(card);
    cy.get('#month')
      .type(month);
    cy.get('#year')
      .type(year);
  };

  assertOrderInfo(name, card, month, year) {
    cy.get('.sweet-alert')
      .should('contain', name, card, month, year);
  };

  clickPurchaseButton() {
    cy.contains('Purchase')
      .click();
  }
}

export default CheckoutPageObject;
