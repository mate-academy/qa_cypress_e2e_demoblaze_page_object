/// <reference types='cypress' />
const username = 'testpacka';
const password = 'testpack3a';
const {
  getRandomName,
  getRandomCountry,
  getRandomCity,
  getRandomCreditCard,
  getRandomMonth,
  getRandomYear
} = require('../support/testData');

const testData = {
  name: getRandomName(),
  country: getRandomCountry(),
  cities: getRandomCity(),
  creditCard: getRandomCreditCard(),
  month: getRandomMonth(),
  year: getRandomYear()
};

describe('Login and Add to Cart Workflow', () => {
  before(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('should log in and place an order', () => {
    cy.get('#signin2').click();
    cy.get('#sign-username').type(username);
    cy.get('#sign-password').type(password);
    cy.get('#signInModal .btn-primary').click();
    cy.get('#signInModal .close > span').click();

    cy.get('#login2').click();
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);
    cy.get('#logInModal .btn-primary').click();
    cy.get('#logInModal .close > span').click();

    cy.contains('a', 'Laptops', { timeout: 10000 }).click();
    cy.contains('a', 'Sony vaio i5').click();
    cy.contains('a', 'Add to cart').click();
    cy.contains('a', 'Cart').click();
    cy.contains('button', 'Place Order').click();

    cy.get('#name').should('be.visible').type(testData.name);
    cy.get('#country').should('be.visible').type(testData.country);
    cy.get('#city').should('be.visible').type(testData.cities);
    cy.get('#card').should('be.visible').type(testData.creditCard);
    cy.get('#month').should('be.visible').type(testData.month);
    cy.get('#year').should('be.visible').type(testData.year);

    cy.contains('button', 'Purchase').click();

    cy.contains('button', 'OK').click();
  });
});
