import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import CheckoutPageObject from '../support/pages/checkout.pageObject';
import { faker } from '@faker-js/faker';
/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const checkout = new CheckoutPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.datatype.number({ min: 1, max: 12 }).toString(),
  year: faker.datatype.number({ min: 2023, max: 2030 }).toString(),
};

describe('Checkout Flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should add a laptop to cart and complete the purchase', () => {
    homePage.clickCategory('Laptops');

    homePage.clickProduct('Sony vaio i7');

    homePage.clickAddToCart();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contain('Product added');
    });

    homePage.clickCart();
    checkout.verifyProductInCart('Sony vaio i7');

    checkout.clickPlaceOrder();

    checkout.fillOrderForm({
      name: testData.name,
      country: testData.country,
      city: testData.city,
      card: testData.card,
      month: testData.month,
      year: testData.year,
    });

    checkout.clickPurchase();
    checkout.verifyPurchaseDetails({
      name: testData.name,
      country: testData.country,
      city: testData.city,
      card: testData.card,
      month: testData.month,
      year: testData.year,
    });

    checkout.clickOk();
  });
});
