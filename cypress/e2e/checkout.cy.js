/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import {
  faker
} from '@faker-js/faker';
import PlaceOrderFormPageObject
  from '../support/pages/placeOrderForm.pageObject';

import PageObject from '../support/PageObject';

const homePage = new HomeAndCataloguePageObject();
const placeOrderForm = new PlaceOrderFormPageObject();
const pageObject = new PageObject();

const testData = {
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: Math.random().toString().slice(2, 20),
  month: faker.date.month(),
  year: faker.number.int({
    min: 1950,
    max: 2025
  }),
  firstMessage: 'Product added',
  secondMessage: 'Thank you for your purchase!'
};

describe('Place Order', () => {
  before(() => {
    homePage.visit();
  });

  it('assert entered data after placing an order', () => {
    homePage.clickOnCategory('Laptops');

    homePage.clickOnProduct('Sony vaio i7');

    pageObject.assertAllert(testData.firstMessage);

    homePage.clickOnButton('Add to cart');

    homePage.clickOnLink('Cart');

    cy.contains('td', 'Sony vaio i7')
      .should('exist');

    homePage.clickOnButton('Place Order');

    placeOrderForm.typeName(testData.name);

    cy.get('#name')
      .should('have.value', testData.name);

    placeOrderForm.typeCountry(testData.country);

    cy.get('#country')
      .should('have.value', testData.country);

    placeOrderForm.typeCity(testData.city);

    cy.get('#city')
      .should('have.value', testData.city);

    placeOrderForm.typeCreditCard(testData.creditCard);

    cy.get('#card')
      .should('have.value', testData.creditCard);

    placeOrderForm.typeMonth(testData.month);

    cy.get('#month')
      .should('have.value', testData.month);

    placeOrderForm.typeYear(testData.year);

    cy.get('#year')
      .should('have.value', testData.year);

    homePage.clickOnButton('Purchase');

    cy.get('.lead.text-muted')
      .contains(testData.name)
      .should('be.visible');

    cy.get('.lead.text-muted')
      .contains(testData.creditCard)
      .should('be.visible');

    homePage.clickOnButton('OK');
  });
});
