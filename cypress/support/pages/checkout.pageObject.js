import PageObject from '../PageObject';

class CheckoutPageObject extends PageObject {
  clickOnButton(button) {
    cy.contains('.btn', button).click();
  }

  assertProduct(product) {
    cy.get('#tbodyid').should('contain', product);
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

  get cardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  get successfulOrder() {
    return cy.get('.sweet-alert');
  }

  assertSuccessfulOrder (data) {
    this.successfulOrder.should('contain', data);
  }
}





export default CheckoutPageObject;