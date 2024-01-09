/// <reference types='cypress' />
const faker = require('faker');

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';

import CartPageObject from '../support/pages/cart.pageObject';
const cartPage = new CartPageObject();
const homePage = new HomeAndCataloguePageObject();

describe('demoblaze', () => {
   const user = {
    username: faker.lorem.word(6),
    password: faker.internet.password(),
    country: faker.address.country(),
    city: faker.address.city(),
    card: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: '1992'
  };

  beforeEach(() => {
        
    homePage.visit();
  });

  it('should provide an ability to checkout', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnAddToCart();
    homePage.assertAllert('Product added');
    homePage.assertModalIsVisible();
    homePage.clickOnCart();
    cartPage.assertProductInTheCart('Sony vaio i7');
    cartPage.clickPlaceOrder();
    cartPage.fillNameField(user.username);
    cartPage.fillCountryField(user.country);
    cartPage.fillCityField(user.city);
    cartPage.fillCreditCardField(user.card);
    cartPage.fillMonthField(user.month);
    cartPage.fillYearField(user.year);
    cartPage.clickOnPurchaseButton();
    cartPage.assertModalContainsUsername(user.username);
    cartPage.assertModalContainsCard(user.card);
    cartPage.clickOnOkButton();   

  });
});
