/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import PurchaseFormPageObject from '../support/pages/purchaseForm.pageObject';

const faker = require('faker');

const productPage = new HomeAndCataloguePageObject();
const placeOrderForm = new PurchaseFormPageObject();

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
    productPage.visit();
  });

  it('should be able to add item to the cart and buy it', () => {
    productPage.clickOnCategory('Laptops');
    productPage.clickOnProduct('Sony vaio i7');
    productPage.clickOnAddToCartButton();
    productPage.assertAllert('Product added');
    productPage.clickOnLink('Cart');
    productPage.assertItemInCart('Sony vaio i7');
    productPage.clickOnButtonPlaceOrder();
    placeOrderForm.findFieldById('name', userInfo.name);
    placeOrderForm.findFieldById('country', userInfo.country);
    placeOrderForm.findFieldById('city', userInfo.city);
    placeOrderForm.findFieldById('card', userInfo.creditCard);
    placeOrderForm.findFieldById('month', userInfo.month);
    placeOrderForm.findFieldById('year', userInfo.year);
    placeOrderForm.clickOnPurchaseButton();
    placeOrderForm.assertDataAfterPurchase(userInfo.name);
    placeOrderForm.assertDataAfterPurchase(userInfo.creditCard);
    placeOrderForm.clickOnOkAfterPurchase();
  });
});
