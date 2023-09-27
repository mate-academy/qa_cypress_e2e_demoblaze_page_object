import PageObject from '../PageObject';

class OrderConfirmationPageObject extends PageObject {
  submitOrder() {
    cy.get('#submitOrderButton').click();
  }

  fillName(name) {
    cy.get('#name').type(name);
  }

  fillCountry(country) {
    cy.get('#country').type(country);
  }

  fillCity(city) {
    cy.get('#city').type(city);
  }

  fillCreditCard(cardNumber) {
    cy.get('#card').type(cardNumber);
  }

  fillYear(year) {
    cy.get('#year').type(year);
  }

  fillMonth(month) {
    cy.get('#month').type(month);
  }

  assertSuccessMessage(message) {
    cy.contains(message).should('exist');
  }

  assertOrderAmount(expectedAmount) {
    cy.contains(`Amount: ${expectedAmount} USD`).should('exist');
  }

  assertCardNumber(cardNumber) {
    cy.contains(`Card Number: ${cardNumber}`).should('exist');
  }

  assertName(name) {
    cy.contains(`Name: ${name}`).should('exist');
  }

  assertDate(currentDate) {
    cy.contains(`Date: ${currentDate}`).should('exist');
  }
}

export default OrderConfirmationPageObject;
