import PageObject from '../PageObject';

class OrderModal extends PageObject {
  get modal() {
    return cy.get('.sweet-alert');
  }

  get okButton() {
    return cy.contains('button', /^ok$/i);
  }

  fillForm({ name, country, city, card, month, year }) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  purchase() {
    cy.contains('button', 'Purchase').click();
  }

  assertConfirmation({ name, country, city, card, month, year }) {
    this.modal.should('be.visible');
    cy.get('.sweet-alert .lead').eq(0).should('contain.text', name);
    cy.get('.sweet-alert .lead').eq(1).should('contain.text', country);
    cy.get('.sweet-alert .lead').eq(2).should('contain.text', city);
    cy.get('.sweet-alert .lead').eq(3).should('contain.text', card);
    cy.get('.sweet-alert .lead').eq(4).should('contain.text', month);
    cy.get('.sweet-alert .lead').eq(5).should('contain.text', year);
  }

  confirm() {
    this.okButton.should('be.visible').click();
  }
}

export default OrderModal;
