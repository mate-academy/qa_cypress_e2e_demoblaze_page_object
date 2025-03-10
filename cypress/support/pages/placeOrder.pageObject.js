/// <reference types='cypress' />

import PageObject from '../PageObject';

class PlaceOrderFormObject extends PageObject {
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

  get purchaseBtn() {
    return cy.contains('Purchase');
  }

  typeName(name) {
    this.nameField.type(name);
  }

  typeCountry(country) {
    this.countryField.type(country);
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
    this.yearField.type(year);
  }

  purchase() {
    this.purchaseBtn.click();
  }
}

class PurchaseSuccessModalObject extends PageObject {
  windowName = 'Thank you for your purchase!';

  assertSuccessStatusByName() {
    cy.contains(this.windowName)
      .should('exist');
  }

  assureSum(sum) {
    cy.contains(`Amount: ${sum} USD`)
      .should('exist');
  }

  assureCardNumber(cardNumber) {
    cy.contains(`Card Number: ${cardNumber}`)
      .should('exist');
  }

  assureClientName(name) {
    cy.contains(`Name: ${name}`)
      .should('exist');
  }

  assureDate() {
    cy.task('convertCurrentDate')
      .then((date) => {
        cy.contains(`Date: ${date}`).should('exist');
      });
  }

  get okButton() {
    return cy.contains('button', 'OK');
  }

  closeModal() {
    // this.okButton.click();
    this.okButton.type('{Enter}');
  }
}

export { PurchaseSuccessModalObject, PlaceOrderFormObject };
