/// <reference types='cypress' />

import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import {
  faker
} from '@faker-js/faker';
import PlaceOrderFormPageObject
  from '../support/pages/placeOrderForm.pageObject';

const contactForm = new ContactFormPageObject();
const homePage = new HomeAndCataloguePageObject();
const placeOrderForm = new PlaceOrderFormPageObject();

const testData = {
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: Math.random().toString().slice(2, 20),
  month: faker.date.month(),
  year: faker.number.int({ min: 1950, max: 2025 }),
  firstMessage: 'Product added',
  secondMessage: 'Thank you for your purchase!'
};

describe('Place Order', () => {
  before(() => {
    homePage.visit();
  });

  it('assert entered date after placing an order', () => {
    homePage.clickOnCategory('Laptops');

    homePage.clickOnProduct('Sony vaio i7');

    homePage.clickOnButton('Add to cart');

    contactForm.assertAllert(testData.firstMessage);

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

    homePage.clickOnButton('OK');

    contactForm.assertAllert(testData.secondMessage);
  });
});
