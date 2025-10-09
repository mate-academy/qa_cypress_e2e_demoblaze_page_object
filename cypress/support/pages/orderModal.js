import PageObject from '../PageObject';

class OrderModal extends PageObject {
  get nameField() { return cy.get('#name'); }
  get countryField() { return cy.get('#country'); }
  get cityField() { return cy.get('#city'); }
  get cardField() { return cy.get('#card'); }
  get monthField() { return cy.get('#month'); }
  get yearField() { return cy.get('#year'); }
  get purchaseBtn() { return cy.contains('button', 'Purchase'); }
  get okBtn() { return cy.contains('button', 'OK'); }

  fillForm({ name, country, city, card, month, year }) {
    this.nameField.type(name);
    this.countryField.type(country);
    this.cityField.type(city);
    this.cardField.type(card);
    this.monthField.type(month);
    this.yearField.type(year);
  }

  purchase() {
    this.purchaseBtn.click();
  }

  assertConfirmation({ name, card, ...rest }) {
    cy.get('.sweet-alert').should('contain.text', name)
                          .and('contain.text', card);
    Object.values(rest).forEach(val => {
      cy.get('.sweet-alert').should('contain.text', val);
    });
  }

  confirm() {
    this.okBtn.click();
  }
}

export default OrderModal;
