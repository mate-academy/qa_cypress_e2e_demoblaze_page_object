/// <reference types='cypress' />
import faker from 'faker';
// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.random.words(),
  city: faker.random.words(),
  month: faker.random.word()
};

describe('Demoblaze', () => {
  before(() => {
    homePage.visit();
  });

  it('should add a product to the cart and place the order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    cy.get('.btn').contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.contains('Product added');
    });

    cy.on('window:confirm', () => true);
    homePage.clickOnLink('Cart');

    cy.get('.table-responsive').should('contain', 'Sony vaio i7');
    cy.get('.btn').contains('Place Order').click();

    const card = '9999 8888 7777 0000';

    cy.get('#name').type(testData.name);
    cy.get('#country').type(testData.country);
    cy.get('#city').type(testData.city);
    cy.get('#card').type(card);
    cy.get('#month').type(testData.month);
    cy.get('#year').type('2001');
    cy.get('.btn').contains('Purchase').click();

    cy.get('[class="sweet-alert  showSweetAlert visible"]')
      .should('contain', card);
    cy.get('.btn').contains('OK')
      .click();
  });
});
