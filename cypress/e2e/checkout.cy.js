/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
  import CartPageObject from '../support/pages/cartPage.pageObject.js'
  import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();
const testData = {
  name: faker.name.firstName(),
  country: faker.random.word(),
  city: faker.random.word(),
  card: ('3333 4444 5555 6666'),
  month: faker.random.word(),
  year: faker.random.number({max: 2019, min:1950})
};

describe('Demoblaze testing', () => {
  before(() => {
    homePage.visit();
  });

  it('shoud provide the ability to buy product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    cy.contains('.btn', 'Add to cart')
      .click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added`)
    });
    homePage.clickOnLink('Cart');
    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.placeOrderBtn();
    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCard(testData.card);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);
    cy.wait(1000);
    cy.contains('.sweet-alert', 'Thank you for your purchase!')
      .should('exist');
    cy.contains('.confirm btn', 'OK')
      .click();
  });
});
