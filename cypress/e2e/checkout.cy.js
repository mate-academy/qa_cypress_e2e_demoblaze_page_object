import faker from 'faker';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();

describe('Demoblaze', () => {
  before(() => {
    homePage.visit();
  });

  const testData = {
    name: faker.name.findName(),
    country: faker.address.country(),
    city: faker.address.city(),
    card: faker.finance.creditCardNumber(),
    month: faker.date.month()
  };

  it('should add item to cart and place order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    cy.contains('.btn', 'Add to cart').click();

    homePage.assertAllert('Product added');

    homePage.clickOnLink('Cart');
    cy.contains('.success', 'Sony vaio i7');
    cy.contains('.btn', 'Place Order').click();

    cy.get('#name').type(testData.name);
    cy.get('#country').type(testData.country);
    cy.get('#city').type(testData.city);
    cy.get('#card').type(testData.card);
    cy.get('#month').type(testData.month);
    cy.get('#year').type('2023');
    cy.contains('.btn', 'Purchase').click();

    cy.contains('.lead', testData.card);
    cy.contains('.confirm', 'OK').click();
  });
});
