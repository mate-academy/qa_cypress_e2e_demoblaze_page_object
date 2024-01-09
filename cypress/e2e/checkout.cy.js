/// <reference types='cypress' />
import PageObject from '../support/PageObject';
import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';

const faker = require('faker');

const homePage = new HomeAndCataloguePageObject();
const pageObject = new PageObject();

const userInfo = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: '2026'
};
describe('Home page', () => {
  before(() => {
    homePage.visit();
  });

  it('should be able to add item to the cart and buy it', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnAddToCartButton();
    pageObject.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    homePage.assertItemInCart('Sony vaio i7');
    homePage.clickOnButtonPlaceOrder();
    homePage.findFieldById('name', userInfo.name);
    homePage.findFieldById('country', userInfo.country);
    homePage.findFieldById('city', userInfo.city);
    homePage.findFieldById('card', userInfo.creditCard);
    homePage.findFieldById('month', userInfo.month);
    homePage.findFieldById('year', userInfo.year);
    homePage.clickOnPurchaseButton();
    homePage.assertDataAfterPurchase(userInfo.name);
    homePage.assertDataAfterPurchase(userInfo.creditCard);
    homePage.clickOnOkAfterPurchase();
  });
});
