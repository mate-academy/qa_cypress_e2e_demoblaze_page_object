import PageObject from "../PageObject";

export default class checkoutPageObject extends PageObject {
  url = '/cart.html';

  get nameField() {
    return cy.get('#name.form-control');
  }

  get countryField() {
    return cy.get('#country.form-control');
  }
  get cityField() {
    return cy.get('#city.form-control');
  }
  get creditCardField() {
    return cy.get('#card.form-control');
  }
  get monthField() {
    return cy.get('#month.form-control');
  }
  get yearField() {
    return cy.get('#year.form-control');
  }
}

//export default ContactFormPageObject;