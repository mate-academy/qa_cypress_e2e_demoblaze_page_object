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

  fillOrderForm(name, country, city, card, month, year) {
   cy.get('#name').type(name);
   cy.get('#country').type(country);
   cy.get('#city').type(city);
   cy.get('#card').type(card);
   cy.get('#month').type(month);
   cy.get('#year').type(year);
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
