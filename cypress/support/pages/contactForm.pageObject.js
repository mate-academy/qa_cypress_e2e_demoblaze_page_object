import PageObject from '../PageObject';

class ContactFormPageObject extends PageObject {
  url = '/index.html';

  get emailField() {
    return cy.get('#recipient-email');
  }

  get nameField() {
    return cy.get('#recipient-name');
  }

  get messageField() {
    return cy.get('#message-text');
  }

  get sendMessageBtn() {
    return cy.contains('.btn', 'Send message');
  }

  get orderModal() {
    return cy.get('#orderModal');
  }

  typeMessage(message) {
    this.messageField.type(message);
  }

  fillOrderForm(name, country, city, card, month, year) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  clickPurchaseButton() {
    cy.contains('Purchase').click();
  }

  assertAlert(expectedMessage) {
    this.orderModal.should('be.visible');
    this.orderModal.should('contain', expectedMessage);
  }

  clickOkButton() {
    cy.get('.confirm').should('be.visible').click();
  }
}

export default ContactFormPageObject;
