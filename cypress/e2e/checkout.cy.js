import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';

/// <reference types="cypress" />

describe('Order - User is able to order the product', () => {
  const homePage = new HomeAndCataloguePageObject();

  beforeEach(() => {
    cy.viewport(1000, 600);
    homePage.visit();
  });

  it('should allow the user to order the product', () => {
    const testData = {
      category: 'Laptops',
      product: 'Sony vaio i7',
      name: faker.name.firstName(),
      country: faker.address.country(),
      city: faker.address.city(),
      cardNumber: faker.finance.creditCardNumber(),
      month: faker.date.month(),
      year: Cypress._.random(2023, 2030),
      successMessage: 'Thank you for your purchase'
    };

    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    cy.contains('Add to cart').click();
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
    });
    cy.get('@alertStub').should('be.called');
    homePage.clickOnLink('Cart');
    cy.get('.col-lg-8').should('contain', testData.product);
    cy.contains('Place Order').click();
    cy.get('#name').type(testData.name);
    cy.get('#country').type(testData.country);
    cy.get('#city').type(testData.city);
    cy.get('#card').type(testData.cardNumber);
    cy.get('#month').type(testData.month);
    cy.get('#year').type(testData.year.toString());
    cy.contains('Purchase').click();
    cy.get('.sweet-alert').should('contain', testData.successMessage);
    cy.get('.lead').should('contain', testData.name);
    cy.get('.lead').should('contain', testData.cardNumber);
    cy.contains('OK').click();
    cy.visit('https://www.demoblaze.com/index.html');
  });
});
