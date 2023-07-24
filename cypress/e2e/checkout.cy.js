/// <reference types='cypress' />

/* eslint-disable */
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import purchasePageObject from '../support/pages/purchase.pageObject';

import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();
const purchase = new purchasePageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.random.number()
};

describe('Checkout of the laptop purchase', () => {

  before(() => {
    homePage.visit();
  });

  it('should be able to purchase the item', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(`Sony vaio i7`);
    cartPage.clickAddToTheCart();
    cy.wait(2000);
    cartPage.assertAlert(`Product added`);
    homePage.clickOnLink(`Cart`);
    cy.wait(2000);
    cartPage.assertProductInCart(`Sony vaio i7`);
    cartPage.clickPlaceOrder();
    purchase.typeName(testData.name);
    purchase.typeCountry(testData.country);
    purchase.typeCity(testData.city);
    purchase.typeCard(testData.card);
    purchase.typeMonth(testData.month);
    purchase.typeYear(testData.year);
    purchase.clickPurchase();
    purchase.asserCard(testData.card);
    purchase.asserName(testData.name);
    purchase.clickOK();
  });
});