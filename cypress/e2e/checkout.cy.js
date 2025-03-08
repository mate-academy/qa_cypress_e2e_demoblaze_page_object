/// <reference types='cypress' />

import { CartPageObject } from '../support/pages/cart.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import { faker } from '@faker-js/faker';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const testData = {
  product: 'Sony vaio i7',
  category: 'Laptops',
  alertMessage: 'Product added',
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: Math.floor(Math.random() * (2024 - 1900 + 1)) + 1900,
  successMessage: 'Thanks for the message!!'
};

describe('Demoblaze flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an opportunity to make a purchase', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton('Add to cart');

    homePage.verifyAlertMessage('Product added');

    homePage.clickOnLink('Cart');
    cartPage.verifyItemInCart('Sony vaio i7');
    cartPage.clickOnButton('Place Order');

    cartPage.fillOrderForm(testData.name, testData.country, testData.city,
      testData.card, testData.month, testData.year);

    cartPage.clickOnButton('Purchase');
    cartPage.verifyEnteredDataOnModalWindow(testData.name, testData.card);

    cartPage.clickOnButton('OK');
  });
});
