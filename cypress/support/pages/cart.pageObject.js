import PageObject from '../PageObject';

class CartObject extends PageObject {
  url = '/cart.html';

  placeOrder() {
    cy.contains('button', 'Place Order')
      .click();
  }

  fillForm({ name, country, city, card, month, year }) {
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
    cy.contains('button', 'Purchase')
      .click();
  }
}

export default CartObject;
