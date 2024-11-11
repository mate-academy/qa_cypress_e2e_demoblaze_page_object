import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  get emailField() {
    return cy.get('#recipient-email');
  }

  assertProduct(productName) {
    cy.get('tbody tr').contains(productName).should('exist');
  }

  typeMessage(message) {
    this.messageField.type(message);
  }

  clickOnPlaceOrderButton() {
    cy.get('.col-lg-1 > .btn').click();
  }

  typeEmail(email) {
    this.emailField.type(email, { force: true });
  }
}

export default CartPageObject;
