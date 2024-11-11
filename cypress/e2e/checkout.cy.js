/// <reference types='cypress' />

import CartPageObject from '../support/pages/cart.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
// const { faker } = require('@faker-js/faker');

const cartPage = new CartPageObject();
const homePage = new HomeAndCataloguePageObject();

// const testData = {
//   email: faker.internet.email(),
//   name: faker.name.firstName(),
//   message: faker.random.words(),
//   successMessage: 'Thanks for the message!!'
// };

describe('', () => {
  before(() => {
    homePage.visit();
  });

  it('', () => {
    homePage.clickOnCategory('Laptop');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.assertAllert('Product added');
    homePage.clickOnAddToCartButton('.col-sm-12 > .btn');
    homePage.clickOnLink('Cart');
    cartPage.assertProduct('Sony vaio i7');
    cartPage.clickOnPlaceOrderButton();
  });
});
