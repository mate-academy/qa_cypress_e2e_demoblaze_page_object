/* eslint-disable cypress/no-unnecessary-waiting */
import PageObject from '../PageObject';

class ContactFormPageObject extends PageObject {
  url = '/cart.html';

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

  fillForm() {
    this.nameField.type('User 123');
    this.countryField.type('Ukraine');
    this.cityField.type('Kyiv');
    this.cardField.type('4444 4444 1111 1111');
    this.monthField.type('3');
    this.yearField.type('2025');
  }

  assertForm() {
    cy.contains('p', 'Id:').as('submitForm');

    cy.get('@submitForm')
      .should('exist');

    cy.get('@submitForm')
      .should('include.text', 'Amount: 790 USD');

    cy.get('@submitForm')
      .should('include.text', 'Card Number: 4444 4444 1111 1111');

    cy.get('@submitForm')
      .should('include.text', 'Name: User 123');
  }

  clickOnPurchase() {
    cy.contains('.btn', 'Purchase')
      .click();
  }

  clickOk() {
    cy.contains('button', 'OK')
      .click();
  }
}

export default ContactFormPageObject;
