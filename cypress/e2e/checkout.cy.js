
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
  import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.random.words(),
  city: faker.random.words(),
  month: faker.random.word(),
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should click on the laptop', () => {
homePage.clickOnCategory('Laptops');
homePage.clickOnProduct('Sony vaio i7')

cy.get('[class="btn btn-success btn-lg"]').contains('Add to cart').click();
cy.on('window:alert', (str) => {
  expect(str).to.contains('Product added');
});
cy.on('window:confirm', () => true);
homePage.clickOnLink('Cart');
cy.get('[class="table-responsive"]').should('contain', 'Sony vaio i7');
cy.get('[class="btn btn-success"]').click();

const card = '1234 5678 8909 5678';

cy.get('[id="name"]').type(testData.name);
cy.get('[id="country"]').type(testData.country);
cy.get('[id="city"]').type(testData.city);
cy.get('[id="card"]').type(card);
cy.get('[id="month"]').type(testData.month);
cy.get('[id="year"]').type('1996');
cy.get('[onclick="purchaseOrder()"]').click();

cy.get('[class="sweet-alert  showSweetAlert visible"]').should('contain', card);
cy.get('[class="sweet-alert  showSweetAlert visible"]').should('contain', testData.name);
cy.get('[class="confirm btn btn-lg btn-primary"]').click();

  });

});
