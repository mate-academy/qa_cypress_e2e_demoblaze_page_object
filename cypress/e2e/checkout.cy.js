/// <reference types='cypress' />
import { faker } from '@faker-js/faker';

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import PlaceOrderFormPageObject from '../support/pages/placeOrder.pageObject';

const homeAndCataloguePage = new HomeAndCataloguePageObject();
const placeOrderForm = new PlaceOrderFormPageObject();

const testData = {
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear(),
  successMessage: 'Thank you for your purchase!'
};

describe('Checkout', () => {
  before(() => {
    homeAndCataloguePage.visit('/');
  });

  it('should buy a laptop', () => {
    homeAndCataloguePage.clickOnCategory('Laptops');
    homeAndCataloguePage.clickOnProduct('Sony vaio i7');
    homeAndCataloguePage.clickOnButton('Add to cart');
    homeAndCataloguePage.assertAllert('Product added');
    homeAndCataloguePage.clickOnButton('Cart');
    homeAndCataloguePage.verifyProductInCart('Sony vaio i7');
    homeAndCataloguePage.clickOnButton('Place Order');
    placeOrderForm.typeName(testData.name);
    placeOrderForm.typeCountry(testData.country);
    placeOrderForm.typeCity(testData.city);
    placeOrderForm.typeCreditCard(testData.creditCard);
    placeOrderForm.typeMonth(testData.month);
    placeOrderForm.typeYear(testData.year);
    homeAndCataloguePage.clickOnButton('Purchase');
    placeOrderForm.checkModalMessage(testData.successMessage);
    homeAndCataloguePage.clickOnButton('OK');
  });
});
