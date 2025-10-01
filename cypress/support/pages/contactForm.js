/// <reference types="cypress" />

class ContactFormPage {
  typeEmail(email) {
    cy.get('#recipient-email').should('be.visible').type(email);
  }

  typeName(name) {
    cy.get('#recipient-name').should('be.visible').type(name);
  }

  typeMessage(message) {
    cy.get('#message-text').should('be.visible').type(message);
  }

  clickOnSendMessageBtn() {
    cy.contains('Send message').click();
  }

  assertAlert(expectedText) {
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain(expectedText);
    });
  }
}

export default ContactFormPage;
