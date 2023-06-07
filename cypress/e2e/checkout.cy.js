import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CheckoutFormPageObject from '../support/pages/checkoutForm.pageObject';
const faker = require('faker');
// import faker from 'faker';

/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const checkoutForm = new CheckoutFormPageObject();

const testOrderData = {
  name: faker.name.firstName(),
  city: faker.address.city(),
  country: faker.address.country(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.datatype.number({ min: 2023, max: 2030 })
};
describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to checkout', () => {
    const category = 'Laptops';
    const product = 'Sony vaio i7';
    homePage.clickOnCategory(category);
    homePage.clickOnProduct(product);
    homePage.clickOnButton('Add to cart');
    checkoutForm.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    checkoutForm.checkProduct(product);
    homePage.clickOnButton('Place Order');
    checkoutForm.userName
      .type(testOrderData.name, { force: true });
    checkoutForm.userCountry
      .type(testOrderData.country, { force: true });
    checkoutForm.userCity
      .type(testOrderData.city, { force: true });
    checkoutForm.userCard
      .type(testOrderData.creditCard, { force: true });
    checkoutForm.cardMonth
      .type(testOrderData.month, { force: true });
    checkoutForm.cardYear
      .type(testOrderData.year);
    checkoutForm.purchaseBtn
      .click();
    checkoutForm.assertAllert('Thank you for your purchase');
    cy.get('.lead.text-muted ')
      .should('contain', testOrderData.name)
      .and('contain', testOrderData.creditCard);
    homePage.clickOnButton('OK');
  });
});
