/// <reference types='cypress' />

import CheckFormPageObject from '../support/pages/checkForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';

const checkPage = new CheckFormPageObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  country: 'Ukraine',
  city: 'Kherson',
  card: '4442444544453323',
  month: '11',
  year: '2023'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to checkout', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    cy.contains('.btn', 'Add to cart')
      .click();
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq('Product added');
    });

    homePage.clickOnLink('Cart');
    cy.get('#tbodyid')
      .should('contain', 'Sony vaio i7');
    cy.contains('.btn', 'Place Order')
      .click();

    checkPage.typeName(testData.name);
    checkPage.typeCountry(testData.country);
    checkPage.typeCity(testData.city);
    checkPage.typeCard(testData.card);
    checkPage.typeMonth(testData.month);
    checkPage.typeYear(testData.year);

    cy.contains('.btn', 'Purchase')
      .click();
    cy.contains('.sweet-alert', 'Thank you for your purchase!')
      .should('exist');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('.btn', 'OK')
      .click();
  });
});
