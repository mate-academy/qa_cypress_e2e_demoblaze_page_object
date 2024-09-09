import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  constructor() {
    super('/cart.html');
  }

  checkAnObject(title, price) {
    cy.contains('td', title)
      .should('exist');

    cy.contains('td', price)
      .should('exist');
  }

  placeOrder() {
    cy.contains('[data-target="#orderModal"]', 'Place Order')
      .click();
  }
}

export default CartPageObject;
