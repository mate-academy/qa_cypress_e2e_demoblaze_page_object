import PageObject from '../PageObject';
import generated from '../generation';

class PlaceOrderForm extends PageObject {
  fillAllFields() {
    cy.get('#name').type(generated.name);
    cy.get('#country').type(generated.country);
    cy.get('#city').type(generated.city);
    cy.get('#card').type(generated.creditCardNumber);
    cy.get('#month').type(generated.month);
    cy.get('#year').type(generated.year);
  }

  get confirmBtn() {
    return cy.contains('Purchase');
  }

  get confirmMessage() {
    return cy.get('.lead');
  }

  get okBtn() {
    return cy.contains('OK');
  }
}

export default PlaceOrderForm;
