import PageObject from '../PageObject';

class CartPage extends PageObject {
  url = '/index.html';

  get assertProduct() {
    return cy.get('#tbodyid');
  }

  clickOrderBtn() {
    return cy.contains('.btn', 'Place Order').click();
  }

  get nameField() {
    return cy.get('#name');
  }

  get countryField() {
    return cy.get('#country');
  }

  get cityField() {
    return cy.get('#city');
  }

  get creditCardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  clickPurchaseBtn() {
    return cy.contains('.btn', 'Purchase').click();
  }

  get confirmMessage() {
    return cy.get('h2');
  }

  get cardNumberAssert() {
    return cy.get('.lead');
  }

  get nameAssert() {
    return cy.get('.lead');
  }

  clickOkBtn() {
    return cy.contains('.btn', 'OK').click();
  }
}

export default CartPage;
