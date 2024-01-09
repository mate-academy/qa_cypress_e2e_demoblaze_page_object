/* eslint-disable max-len */
/// <reference types='cypress' />
import faker from 'faker';
import CartPageObject from '../support/pages/cart.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();
const currentYear = new Date().getFullYear();
const randomYear = Math.floor(Math.random() * (currentYear - 1920 + 1)) + 1920;

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: randomYear
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to checkout the product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton('Add to cart');

    homePage.assertAllert('Product added');

    homePage.clickOnLink('Cart');
    cartPage.assertProductInCart('Sony vaio i7');

    cartPage.clickOnButton('Place Order');
    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCard(testData.card);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);
    cartPage.clickOnButton('Purchase');

    cartPage.assertCardNumber(testData.card);
    cartPage.assertName(testData.name);
    cartPage.clickOkBtn();
  });
});
