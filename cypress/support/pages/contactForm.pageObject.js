import PageObject from '../PageObject';

export default class ContactFormPage extends PageObject {
  openContactForm() {
    cy.get('a[data-target="#exampleModal"]').click();
    return this;
  }

  fillForm(email, name, message) {
    cy.get('#recipient-email').type(email);
    cy.get('#recipient-name').type(name);
    cy.get('#message-text').type(message);
    return this;
  }

  submitForm() {
    cy.get('.modal-footer').contains('button', 'Send message').click();
    return this;
  }
}
