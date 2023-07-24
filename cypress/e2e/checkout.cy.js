/// <reference types='cypress' />

import HomeAndCataloguePageObject from
  '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.PageObject';
import CartPageObject from '../support/pages/сheckout.pageObject';
import { faker } from '@faker-js/faker';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

const testData = {
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: (() => {
    const pastDate = faker.date.past();
    return pastDate.getFullYear();
  })(),
  categoryName: 'Laptops',
  productName: 'Sony vaio i7',
  message: 'Thank you for your purchase!'
};

describe('', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow to add product to the cart', () => {
    homePage.clickOnCategory(testData.categoryName);

    homePage.clickOnProduct(testData.productName);

    productPage.clickOnAddBtn();

    productPage.assertAllert();

    homePage.clickOnLink('Cart');

    cartPage.assertProduct(testData.productName);

    cartPage.clickOnOrderBtn();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    cartPage.addName(testData.name);

    cartPage.addCountry(testData.country);

    cartPage.addCity(testData.city);

    cartPage.addCreditCard(testData.creditCard);

    cartPage.addMonth(testData.month);

    cartPage.addYear(testData.year);

    cartPage.clickOnPurchaseBtn();

    // eslint-disable-next-line max-len
    cartPage.assertSuccessAlert(testData.message, testData.creditCard, testData.year);

    cartPage.clickOnOkBtn();
  });
});
