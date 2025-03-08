import PageObject from '../PageObject';

class OrderPageObject extends PageObject {
  fillOrderForm() {
    cy.get('#name').type('Test Name'); // Змініть на реальні дані
    cy.get('#country').type('Test Country');
    cy.get('#city').type('Test City');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');
  }

  get purchaseButton() {
    return cy.contains('Purchase');
  }

  clickPurchase() {
    this.purchaseButton.click();
  }

  assertOrderDetails() {
    
    cy.get('.modal-body').should('contain', 'Test Name');
    cy.get('.modal-body').should('contain', 'Test Country');
    cy.get('.modal-body').should('contain', 'Test City');
  }

  get okButton() {
    return cy.contains('OK');
  }

  clickOk() {
    this.okButton.click();
  }
}

export default OrderPageObject;