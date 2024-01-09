import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import PageObject from '../support/PageObject';
import CartPageObject from '../support/pages/cart.pageObject.js';
import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const pageObject = new PageObject();
const cartPage = new CartPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.datatype.number()
};

describe('Demoblaze app', () => {
  before(() => {
    homePage.visit();
  });

  it('should be able to buy a product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnAddToCartBtn();
    pageObject.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.productInTheCart('Sony vaio i7');
    cartPage.clickOnThePlaceOrderBtn();
    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCard(testData.creditCard);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);
    cartPage.clickOnThePurchaseBtn();
    cartPage.assertSuccessfulPurcheseMessage('Thank you for your purchase!');
    cartPage.assertSuccessfulPurcheseMessage(testData.name);
    cartPage.assertSuccessfulPurcheseMessage(testData.creditCard);
    cartPage.clickOnTheOkBtn();
  });
});
