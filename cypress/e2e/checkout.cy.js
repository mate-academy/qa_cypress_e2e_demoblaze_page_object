/// <reference types='cypress' />

import { faker } from '@faker-js/faker';
import HomeAndCataloguePageObject from
  '../support/pages/homeСatalogue.pageObject';
import PlaceOrderObject from '../support/pages/placeOrder.pageObject';

const homePage = new HomeAndCataloguePageObject();
const placeOrder = new PlaceOrderObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear()
};

describe('Laptops', () => {
  before(() => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
  });

  it('should be able to add to cart', () => {
    placeOrder.clickOnAddToCartButton();

    homePage.assertAllert('Product added');

    placeOrder.clickOnCartButton();
    placeOrder.verifyProductInCart('Sony vaio i7');
    placeOrder.clickOnOrderModalButton();

    placeOrder.typeName(testData.name);
    placeOrder.typeCountry(testData.country);
    placeOrder.typeCity(testData.city);
    placeOrder.typeCard(testData.creditCard);
    placeOrder.typeMonth(testData.month);
    placeOrder.typeYear(testData.year);
    placeOrder.clickOnPurchaseButton();

    placeOrder.verifyConfirmMessage();
    placeOrder.clickOnConfirmButton();
  });
});
