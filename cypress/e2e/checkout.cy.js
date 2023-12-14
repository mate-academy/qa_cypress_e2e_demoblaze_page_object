/// <reference types='cypress' />
import HomeAndCataloguePageObject from
  '../support/pages/homeСatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
const { faker } = require('@faker-js/faker');

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const homeTestData = {
  message: 'Product added',
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: '2023'
};

describe('Product purchase', () => {
  before(() => {
    homePage.visit();
  });

  it('The user should be able to buy product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnAddToCart('Add to cart');
    homePage.assertAllert(homeTestData.message);
    homePage.clickOnLink('Cart');
    cy.get('table').get('tbody').contains('Sony vaio i7')
      .should('be.visible');
    cartPage.clickOnButton('Place Order');
    cartPage.typeName(homeTestData.name);
    cartPage.typeCountry(homeTestData.country);
    cartPage.typeCity(homeTestData.city);
    cartPage.typeCard(homeTestData.card);
    cartPage.typeMonth(homeTestData.month);
    cartPage.typeYear(homeTestData.year);
    cartPage.clickOnButton('Purchase');
    // Asserts
    cy.get('.sweet-alert > h2')
      .should('have.text', 'Thank you for your purchase!');
    cy.get('.sweet-alert > p').get('.lead')
      .should('contain', homeTestData.name);
    cy.get('.sweet-alert > p').get('.lead')
      .should('contain', homeTestData.card);
    cartPage.clickOnButton('OK');
  });
});
