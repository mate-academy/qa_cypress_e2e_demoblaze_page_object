import PageObject from '../PageObject';

class PlaceOrderPageObject extends PageObject {
  url = '/index.html';

  clickPlaceOrder() {
    cy.contains('Place Order').click();
  }

  fillOrderForm(name, country, city, card, month, year) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  clickPurchase() {
    cy.contains('Purchase').click();
  }

  assertEnteredData(name, card) {
    cy.get('#name').should('have.value', name);
    cy.get('#card').should('have.value', card);
  }
}

export default PlaceOrderPageObject;
