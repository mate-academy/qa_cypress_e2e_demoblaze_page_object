/// <reference types='cypress' />

import { faker } from '@faker-js/faker';
import HomeAndCataloguePageObject from
  '../support/pages/homeCatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();
const data = {
  firstName: faker.person.firstName(),
  country: 'Ukraine',
  city: 'Cherkassy',
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: '2025'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');

    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.clickOnPlaceOrder();

    cartPage.typeName(data.firstName);
    cartPage.typeCountry(data.country);
    cartPage.typeCity(data.city);
    cartPage.typeCreditCard(data.card);
    cartPage.typeMonth(data.month);
    cartPage.typeYear(data.year);

    cartPage.clickOnPurchase();
    cartPage.assertPopUpMessage();
    cartPage.clickOnOk();
  });
});
