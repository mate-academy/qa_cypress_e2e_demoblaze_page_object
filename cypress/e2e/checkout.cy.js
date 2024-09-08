/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');
const HomeAndCataloguePageObject =
  require('../support/pages/homeСatalogue.pageObject');
const { PurchaseForm } = require('../support/pages/purchaseForm');

const homePage = new HomeAndCataloguePageObject();
const purchaseForm = new PurchaseForm();

describe('', () => {
  before(() => {
    homePage.visit();
  });

  it('', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnUrl('Add to cart');

    cy.on('window:alert', (alert) => {
      expect(alert).to.eq('Product added');
    });

    homePage.clickOnUrl('Cart');

    cy.contains('td', 'Sony vaio i7').should('be.visible');

    homePage.clickOnButton('Place Order');

    purchaseForm.getInput('name').type(faker.name.firstName());
    purchaseForm.getInput('country').type(faker.location.country());
    purchaseForm.getInput('city').type(faker.location.city());
    purchaseForm.getInput('card').type(faker.finance.creditCardNumber());
    purchaseForm.getInput('month').type('08');
    purchaseForm.getInput('year').type('2030');

    homePage.clickOnButton('Purchase');

    cy.contains('h2', 'Thank you for your purchase!');

    homePage.clickOnButton('OK');
  });
});
