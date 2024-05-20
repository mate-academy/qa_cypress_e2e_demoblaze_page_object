import PageObject from '../PageObject';

class PurchaseFormPageObject extends PageObject {
  get nameField() {
    return cy.get('#name');
  }

  typeName(name) {
    this.nameField.type(name);
  }

  get countryField() {
    return cy.get('#country');
  }

  typeCountry(country) {
    this.countryField.type(country);
  }

  get cityField() {
    return cy.get('#city');
  }

  typeCity(city) {
    this.cityField.type(city);
  }

  get cardField() {
    return cy.get('#card');
  }

  typeCard(card) {
    this.cardField.type(card);
  }

  get monthField() {
    return cy.get('#month');
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  get yearField() {
    return cy.get('#year');
  }

  typeYear(year) {
    this.yearField.type(year);
  }
}

export default PurchaseFormPageObject;
