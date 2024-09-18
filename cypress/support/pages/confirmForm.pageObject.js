import PageObject from '../PageObject';

class ConfirmationFormPageObject extends PageObject {
  url = '/cart.html';

  get confirmWindow() {
    return cy.get('.sweet-alert');
  }

  get customerName() {
    return cy.get('.lead');
  }

  get confirmMsg() {
    return cy.get('.sweet-alert > h2');
  }

  get customerCard() {
    return cy.get('.lead');
  }

  get orderId() {
    return cy.get('.lead');
  }
}

export default ConfirmationFormPageObject;
