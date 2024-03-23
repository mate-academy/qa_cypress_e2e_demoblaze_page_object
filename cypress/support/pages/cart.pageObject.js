
import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  get titleOfSonyVaioI7() {
    return cy.get('td').contains('Sony vaio i7');
  }

  assertTitleIsHaveText(text) {
    this.titleOfSonyVaioI7.should('have.text', text, { timeout: 5000 });
  }

  clickOnPlaceOrderButton() {
    cy.get('.btn-success').click();
  }

  clickOnPurchaseButton() {
    cy.get('[onclick="purchaseOrder()"]').click();
  }

  get nameField() {
    return cy.get('#name');
  }

  get countryField() {
    return cy.get('#country');
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

  get modal() {
    return cy.get('.sweet-alert p.lead');
  }

  get okButtonOfModal() {
    return cy.get('.sa-confirm-button-container');
  }

  get successfulPurchaseMassage() {
    return cy.get('h2');
  }

  assertSuccessfulPurchase(text) {
    this.successfulPurchaseMassage.should('contain', text);
  }

  assertDataOfModal(text) {
    this.modal.should('contain', text);
  }
}

export default CartPageObject;
