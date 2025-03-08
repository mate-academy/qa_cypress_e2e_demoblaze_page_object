import PageObject from '../PageObject';

class ContactFormPageObject extends PageObject {
  url = '/index.html';

  get emailField() {
    return cy.get('#recipient-email');
  }

  get nameField() {
    return cy.get('#name');
  }

  get messageField() {
    return cy.get('#message-text');
  }

  get sendMessageBtn() {
    return cy.contains('.btn', 'Send message');
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
  
  fillName(name) {
    this.nameField.type(name);
  }

  fillCountry(country) {
    this.countryField.type(country);
  }

  fillCity(city) {
    this.cityField.type(city);
  }

  fillCreditCard(creditCard) {
    this.creditCardField.type(creditCard);
  }

  selectMonth(month) {
    this.monthField.type(month);
  }

  selectYear(year) {
    this.yearField.type(year);
}

clickPurchase() {
  cy.contains('button', 'Purchase')
    .click();
}


assertOrderData(data) {
  cy.get('.sweet-alert') 
    .should('be.visible') 
    .within(() => { 
      cy.contains(`Name: ${data.name}`)
        .should('be.visible');
      cy.contains(`Amount: ${data.amount} USD`)
        .should('be.visible');
      cy.contains(`Card Number: ${data.creditCard}`)
        .should('be.visible');
      cy.contains(`Id:`)
        .should('be.visible');
      cy.contains(`Date:`)
        .should('be.visible');
    });
}


clickOk() {
  cy.get('.confirm')
    .contains('button', 'OK')
    .click();
}
}

export default ContactFormPageObject;
