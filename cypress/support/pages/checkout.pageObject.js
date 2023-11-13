import PageObject from '../PageObject';
import faker from 'faker';
/// <reference types='cypress' />



class CheckoutPageObject extends PageObject {
  url = '/index.html';


  get nameField() {
    return cy.get('#name');
  }

  get countryField() {
    return cy.get('#country');
  }

  get cityField() {
    return cy.get('#city');
  }

  get cardField() {
    return cy.get('#card')
  }

  get monthField() {
    return cy.get('#month')
  }

  get yearField() {
    return cy.get('#year')
  }

  get sendMessageBtn() {
    return cy.contains('.btn', 'Send message');
  }




  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCountry(country) {
    this.countryField.type(country, { force: true });
  }

  typeCity(city) {
    this.cityField.type(city);
  }

  typeCard(card) {
    this.cardField.type(card);
  }

  typeMonth(month){
    this.monthField.type(month)
  }

  typeYear(year){
    this.yearField.type(year);
  }

  clickOnSendMessageBtn() {
    this.sendMessageBtn.click();
  }
}

export default CheckoutPageObject;
