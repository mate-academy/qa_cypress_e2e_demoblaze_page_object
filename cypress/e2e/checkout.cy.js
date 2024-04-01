/* eslint-disable cypress/no-unnecessary-waiting */
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CartPageObject
  from '../support/pages/cart.pageObject';
import ProductPageObject
  from '../support/pages/product.pageObject';
import { faker } from '@faker-js/faker';

/// <reference types='cypress' />
const homePage = new HomeAndCataloguePageObject();
const product = new ProductPageObject();
const cart = new CartPageObject();

const testData = {
  email: faker.internet.email(),
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.number.float({ min: 2025, max: 2035, fractionDigits: 0 })
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an opportunity to place an order', () => {
    homePage.clickOnCategory('Laptop');
    homePage.clickOnProduct('Sony vaio i7');
    product.clickOnButton('Add to cart');
    cy.wait(500);
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cart.assertProduct('Sony vaio i7');
    cart.clickOnButton('Place Order');
    cart.typeName(testData.name);
    cart.typeCountry(testData.country);
    cart.typeCity(testData.city);
    cart.typeCard(testData.creditCard);
    cart.typeMonth(testData.month);
    cart.typeYear(testData.year);
    cart.clickOnButton('Purchase');
    cart.assertOrder(testData.creditCard);
    cart.assertOrder(testData.name);
    cart.clickOnButton('OK');
  });
});
