/* eslint-disable max-len */
import ProductPagePageObject
  from '../support/pages/productPage.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
import CartPageObject from '../support/pages/cart.PageObject';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPagePageObject();
const cartPage = new CartPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: (() => {
    const randomMonth = faker.random.number({
      min: 1,
      max: 12
    });
    return randomMonth;
  })(),
  year: (() => {
    const randomYear = faker.random.number({
      min: 2023,
      max: 2030
    });
    return randomYear;
  })(),
  categoryName: 'Laptops',
  productName: 'Sony vaio i7',
  assertMessage: 'Thank you for your purchase!'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow to make a purchase', () => {
    productPage.visit();
    productPage.clickOnAddToCartBtn();
    productPage.assertAllert();
    homePage.clickOnLink('Cart');
    cartPage.assertProduct(testData.productName);
    cartPage.clickOnPlaceOrderBtn();
    cartPage.addName(testData.name);
    cartPage.addCountry(testData.country);
    cartPage.addCity(testData.city);
    cartPage.addCreditCard(testData.creditCard);
    cartPage.addMonth(testData.month);
    cartPage.addYear(testData.year);
    cartPage.clickOnPurchaseBtn();
    cartPage.assertAlert(testData.name, testData.creditCard, testData.assertMessage);
    cartPage.clickOnOkBtn();
  });
});
