import CheckoutFormPageObject from '../support/pages/checkoutForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';

/// <reference types='cypress' />

const checkoutPage = new CheckoutFormPageObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  country: 'Ukraine',
  city: 'Kyiv',
  card: '4785985216845687',
  month: '5',
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

    checkoutPage.typeName(testData.name);
    checkoutPage.typeCountry(testData.country);
    checkoutPage.typeCity(testData.city);
    checkoutPage.typeCard(testData.card);
    checkoutPage.typeMonth(testData.month);
    checkoutPage.typeYear(testData.year);

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
