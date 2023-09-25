/// <reference types='cypress' />

import HomeAndCataloguePageObject from
  '../support/pages/homeСatalogue.pageObject';
import BtnPageObject from
  '../support/pages/buttons.pageObject';
import CheckoutForm from
  '../support/pages/checkoutForm.pageObject';
import faker from 'faker';

describe('Demoblaze (POM basics)', () => {
  const homePage = new HomeAndCataloguePageObject();
  const btn = new BtnPageObject();
  const checkForm = new CheckoutForm();

  const testData = {
    name: faker.name.firstName(),
    country: faker.address.country(),
    city: faker.address.city(),
    card: faker.finance.creditCardNumber(),
    month: faker.random.number({ min: 1, max: 12 }),
    year: faker.random.number({ min: 2013, max: 2033 }),
    cartLink: 'Cart',
    categoryName: 'Laptops',
    productName: 'Sony vaio i7',
    message: 'Product added',
    successMessage: 'Thank you for your purchase!'
  };

  before(() => {
    homePage.visit();
  });

  it('should place an order', () => {
    homePage.clickOnCategory(testData.categoryName);
    homePage.clickOnProduct(testData.productName);
    btn.clickOnAddBtn();
    homePage.assertAlert(testData.message);
    homePage.clickOnLink(testData.cartLink);
    checkForm.assertProduct(testData.productName);
    btn.clickOnOrderBtn();
    checkForm.addName(testData.name);
    checkForm.addCountry(testData.country);
    checkForm.addCity(testData.city);
    checkForm.addCard(testData.card);
    checkForm.addMonth(testData.month);
    checkForm.addYear(testData.year);
    btn.clickOnPurcaseBtn();
    homePage.assertAlert(testData.successMessage);
    btn.clickOnOkBtn();
  });
});
