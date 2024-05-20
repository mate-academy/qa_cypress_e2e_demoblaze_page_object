import PageObject from '../PageObject';
class OrderPagePageObject extends PageObject {
  get nameField() {
    return cy.get('#name');
  }

  get countyField() {
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

  fillPlaceOrderDetails(details) {
    cy.get('#name').type(details.name);
    cy.get('#country').type(details.country);
    cy.get('#city').type(details.city);
    cy.get('#card').type(details.card);
    cy.get('#month').type(details.month);
    cy.get('#year').type(details.year);
  }

  purchaseOrder() {
    cy.contains('Purchase').click();
  }

  verifyOrder(user) {
    cy.get('.sweet-alert').should('contain', user.name);
    cy.get('.sweet-alert').should('contain', user.card);
  }

  confirmOrder() {
    cy.contains('OK').click();
  }

  OkButton() {
    cy.contains('.btn-primary', 'OK').click();
  }
}
export default OrderPagePageObject;
