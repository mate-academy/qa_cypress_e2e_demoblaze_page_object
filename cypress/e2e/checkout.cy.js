/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';

const faker = require('faker');

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.random.word(),
  city: faker.random.word(),
  card: '0000000000000000',
  month: faker.date.month(),
  year: faker.random.number({ min: 2023, max: 2033 }),
  allertMessage: 'Thank you for your purchase!'
};

describe('Demoblaze checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow to add a product to the cart and place the order', () => {
    homePage.clickOnCategory('Laptops');

    homePage.clickOnProduct('Sony vaio i7');

    productPage.addToCart();

    productPage.confirmAlert('Product added');

    homePage.clickOnLink('Cart');

    cartPage.addedProduct.should('contain', 'Sony vaio i7');

    cartPage.placeOrder();

    cartPage.typeName(testData.name);

    cartPage.typeCountry(testData.country);

    cartPage.typeCity(testData.city);

    cartPage.typeCardNumber(testData.card);

    cartPage.typeMonth(testData.month);

    cartPage.typeYear(testData.year);

    cartPage.makePurchase();

    cartPage.assertAlert(testData.card, testData.name, testData.allertMessage);

    cartPage.clickOnOkBtn();
  });
});
