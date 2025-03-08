import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import OrderPageObject from '../support/pages/order.pageObject';

import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const cartpage = new CartPageObject();
const order = new OrderPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: '4539622039401321',
  month: faker.random.number({ min: 1, max: 12 }).toString().padStart(2, '0'),
  year: faker.random.number({ min: 2023, max: 2030 }).toString()
};

describe('Checkout ', () => {
  before(() => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(`Sony vaio i7`);
    cartpage.clickAddToTheCart();
  });

  it('should allow to place an order', () => {
    cartpage.assertAllert(`Product added`);
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    homePage.clickOnLink(`Cart`);
    cartpage.assertProductInCart(`Sony vaio i7`);
    cartpage.clickPlaceOrder();
    order.typeName(testData.name);
    order.typeCountry(testData.country);
    order.typeCity(testData.city);
    order.typeCard(testData.card);
    order.typeMonth(testData.month);
    order.typeYear(testData.year);
    order.clickPurchase();
    order.asserCard(testData.card);
    order.asserName(testData.name);
    order.clickOK();
  });
});
