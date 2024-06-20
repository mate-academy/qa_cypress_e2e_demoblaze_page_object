/// <reference types='cypress' />

import CataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';

import CartPageObject
  from '../support/pages/orderForm.pageObject';

import faker from 'faker';

const homePage = new CataloguePageObject();
const cartPage = new CartPageObject();

const randomData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear(),
  successMessage: 'Thank you for your purchase!'
};

describe('Buying process', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to add a product to the cart and buy it', () => {
    homePage.clickOnLink('Cart');
    cartPage.assertCartIsEmpty();
    homePage.visit();

    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.clickOnButton('Place Order');

    cartPage.typeName(randomData.name);
    cartPage.typeCountry(randomData.country);
    cartPage.typeCity(randomData.city);
    cartPage.typeCreditCard(randomData.creditCard);
    cartPage.typeMonth(randomData.month);
    cartPage.typeYear(randomData.year);
    cartPage.clickOnButton('Purchase');

    cartPage.assertSuccessMessage(randomData.successMessage);
    cartPage.assertName(randomData.name);
    cartPage.assertCreditCard(randomData.creditCard);
    cartPage.clickOnButton('OK');
  });
});
