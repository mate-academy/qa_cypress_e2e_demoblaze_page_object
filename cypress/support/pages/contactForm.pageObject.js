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

  typeEmail(email) {
    this.emailField.type(email, { force: true });
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeMessage(message) {
    this.messageField.type(message);
  }

  clickOnSendMessageBtn() {
    this.sendMessageBtn.click();
  }
}

export default ContactFormPageObject;
