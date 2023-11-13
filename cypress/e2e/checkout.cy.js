/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const testData = {
  name: faker.name.firstName(),
  country: faker.random.word(),
  city: faker.random.word(),
  card: ('3333 4444 5555 6666'),
  month: faker.random.word(),
  year: ('1999')
};

describe('Demoblaze testing', () => {
  before(() => {
    homePage.visit();
  });

  it('shoud provide the ability to buy product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.addToCartBtn();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added`)
    });
    homePage.clickOnLink('Cart');
    cy.get('#tbodyid')
      .should('contain', 'Sony vaio i7');
    homePage.placeOrderBtn();
    cy.get('#name')
      .type(testData.name);
    cy.get('#country')
      .type(testData.country);
    cy.get('#city')
      .type(testData.city);
    cy.get('#card')
      .type(testData.card);
    cy.get('#month')
      .type(testData.month);
    cy.get('#year')
      .type(testData.year);
    cy.contains('.btn', 'Purchase')
      .click;
    cy.on('window:alert', (str) => {
        expect(str).to.contain(testData.name, testData.card);
        cy.contains('.confirm btn', 'OK')
          .click();
    });
  });
});
