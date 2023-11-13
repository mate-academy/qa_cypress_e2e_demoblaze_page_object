/// <reference types='cypress' />
import faker from 'faker';
import PageObject from '../PageObject';

class ContactFormPageObject extends PageObject {
  testData = {
    name: faker.name.findName(),
    country: faker.random.word(),
    city: faker.random.word(),
    card: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: Math.floor(2000 + Math.random() * 20)
  };

  get nameField() {
    return cy.get('#name');
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

  get Btn() {
    return cy.get('.btn');
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

  typeCreditCard(card) {
    this.creditCardField.type(card);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year, { force: true });
  }

  clickBtn() {
    this.Btn.click();
  }

  clickOnTheButton(name) {
    cy.contains('.btn', name)
      .click();
  }

  assertData(name, card, country, city, month, year) {
    cy.get('.sweet-alert')
      .should('contain', 'Thank you for your purchase!')
      .should('contain', name)
      .should('contain', card)
      .should('contain', country)
      .should('contain', city)
      .should('contain', month)
      .should('contain', year);
  }
}

export default ContactFormPageObject;
