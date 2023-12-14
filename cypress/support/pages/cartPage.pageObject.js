import PageObject from '../PageObject';

class CartPage extends PageObject {
  url = '/index.html';

  checkCartItem(item) {
    cy.get('#tbodyid').contains(item).should('exist');
  }

  placeOrder() {
    cy.get('.btn').contains('Place Order').click();
  }

  checkout(name, cardNumber) {
    // enter data and click purchase
    cy.get('#name').type(name);
    cy.get('#card').type(cardNumber);
    cy.get('.btn').contains('Purchase').click();
    // assert data
    cy.get('.sweet-alert').should('contain', name);
    cy.get('.sweet-alert').should('contain', cardNumber);

    cy.get('.btn').contains('OK').click();
  }
}

export default CartPage;
