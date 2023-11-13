/// <reference types='cypress' />
import PageObject from '../PageObject';

class ContactFormPageObject extends PageObject {
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

  typeCountry(country) {
    this.countryField.type(country);
  }

  typeName(name) {
    this.nameField.type(name);
  }

  typeCity(city) {
    this.cityField.type(city);
  }

  typeCreditCart(card) {
    this.creditCartField.type(card);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year);
  }

  clickBtn() {
    this.Btn.click();
  }

  clickOnTheButton(name) {
    cy.contains('.btn', name)
      .click();
  }

  assertData(name, card) {
    cy.get('.sweet-alert')
      .should('contain', name)
      .should('contain', 'Thank you for your purchase!')
      .should('contain', card);
  }
}

export default ContactFormPageObject;
