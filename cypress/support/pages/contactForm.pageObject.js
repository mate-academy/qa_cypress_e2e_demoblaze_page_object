import PageObject from '../PageObject';

export class ContactFormPageObject extends PageObject {
  url = '/index.html';

  get clickTheCartLink() {
    return cy.get('#cartur').click();
  }

  get clickAddToCartButton() {
    return cy.contain('Add To Cart').click();

  get assertInTheCart() {
    return cy.get('#tbodyid')
    .should('contain', 'Sony vaio i7');
  }
  get laptopslink() {
    return cy.contains('Laptops');
  }

  get fillTheNameField() {
    return cy.contains('Place Order').click();
  }

  get emailField() {
    return cy.get('#recipient-email');
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

  get creditCartField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  get purchaseButton() {
    return cy.get('[onclick="purchaseOrder()"]');
  }

  get clickOn() {
    return cy.get('.confirm btn btn-lg btn-primary');
  }

  get confirmMessage() {
    return cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('Thank you fot your purchase');
    });
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
