import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();

const user = {
  name: faker.name.firstName(),
  country: faker.random.words(),
  city: faker.random.words(),
  month: faker.random.word(),
  card: '1356 1890 2390 5987'
};

describe('Demoblaze', () => {
  before(() => {
    homePage.visit();

    cy.viewport(1920, 1080);
  });

  it('should add the product to the Cart and purcase it', () => {
    homePage.clickOnCategory('Laptops');

    homePage.clickOnProduct('Sony vaio i7');

    homePage.clickOnButton('Add to cart');

    homePage.assertAllert('Product added');

    homePage.clickOnLink('Cart');

    cy.get('[class="table-responsive"]').should('contain', 'Sony vaio i7');

    cy.get('[class="btn btn-success"]').click();

    cy.get('[id="orderModalLabel"]').should('contain', 'Place order');

    cy.get('[id="name"]').type(user.name);

    cy.get('#country').type(user.country);

    cy.get('#city').type(user.city);

    cy.get('#card').type(user.card);

    cy.get('#month').type(user.month);

    cy.get('#year').type('1999');

    cy.get('[onclick="purchaseOrder()"]').click();

    cy.get('[class="sweet-alert  showSweetAlert visible"]')
      .should('contain', user.name);

    cy.get('[class="sweet-alert  showSweetAlert visible"]')
      .should('contain', user.card);

    cy.get('[class="confirm btn btn-lg btn-primary"]').click();    
  });
});
