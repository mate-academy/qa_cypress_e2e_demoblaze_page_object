/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import PageObject from '../support/PageObject';
import { faker } from '@faker-js/faker';

const homePage = new HomeAndCataloguePageObject();
const page = new PageObject();

const customerData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber('####-####-####-####'),
  month: `${faker.datatype.number({ min: 1, max: 12 })}`,
  year: `${faker.datatype.number({ min: 2025, max: 2030 })}`
};

describe('Checkout flow', () => {
  before(() => {
    homePage.visit('https://www.demoblaze.com');
  });

  it('should add product to cart and purchase', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added');
    });
    cy.contains('a', 'Add to cart').click();

    cy.wait(500);

    homePage.clickOnLink('Cart');
    cy.get('td').contains('Sony vaio i7').should('be.visible');

    cy.contains('button', 'Place Order').click();

    cy.get('#name').type(customerData.name);
    cy.get('#country').type(customerData.country);
    cy.get('#city').type(customerData.city);
    cy.get('#card').type(customerData.creditCard);
    cy.get('#month').type(customerData.month);
    cy.get('#year').type(customerData.year);

    cy.contains('button', 'Purchase').click();

    cy.get('.sweet-alert').within(() => {
      cy.contains(`Name: ${customerData.name}`).should('be.visible');
      cy.contains(`Credit Card: ${customerData.creditCard}`).should('be.visible');
      cy.contains('OK').click();
    });
  });
});
