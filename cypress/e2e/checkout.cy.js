/// <reference types='cypress' />
const faker = require('faker');

import PageObject from "../support/PageObject";
import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";

const homePage = new HomeAndCataloguePageObject();
const pageObject = new PageObject();

let userInfo = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: '1111222233334444',
  month: faker.date.month(),
  year: '2002'
}

describe('Home page', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to add item to the cart and buy it', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnAddToCartButton();
    pageObject.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    homePage.assertItemInCart('Sony vaio i7');
    homePage.clickOnButtonPlaceOrder();
    homePage.findById('name', userInfo.name);
    homePage.findById('country', userInfo.country);
    homePage.findById('city', userInfo.city);
    homePage.findById('card', userInfo.creditCard);
    homePage.findById('month', userInfo.month);
    homePage.findById('year', userInfo.year);
    homePage.clickOnPurchase();
    homePage.assertDataAfterPurchase(userInfo.name);
    homePage.assertDataAfterPurchase(userInfo.creditCard);
    homePage.clickOnOkAfterPurchase();
  });
});
