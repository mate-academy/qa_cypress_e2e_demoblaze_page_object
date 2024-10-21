import PlaceOnOrderPageObject
  from '../support/pages/PlaceAnOrder.pageObject.js';
import PageObject from '../support/PageObject.js';
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
const { faker } = require('@faker-js/faker');

const ProductPage = new PlaceOnOrderPageObject();
const homePage = new HomeAndCataloguePageObject();
const allertAssertion = new PageObject();
const cartPage = new PlaceOnOrderPageObject();
const submitOrderFrom = new PlaceOnOrderPageObject();

/// <reference types='cypress' />

const testData = {
  email: faker.internet.email(),
  name: faker.person.firstName(),
  message: faker.word.words({ count: { min: 5, max: 10 } }),
  successMessage: 'Thank you for your purchase!',
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.number.int(),
  month: faker.date.month(),
  year: faker.number.int({ min: 1990, max: 2013 })
};

describe('Demoblaze (POM basics) Workflow', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to place an order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    ProductPage.clickOnAddToCardBtn();
    allertAssertion.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.ensureProductInCart('Sony vaio i7');
    cartPage.openPlaceOrderForm();
    submitOrderFrom.typeName(testData.name);
    submitOrderFrom.typeCoutry(testData.country);
    submitOrderFrom.typeCity(testData.city);
    submitOrderFrom.typeCreditCard(testData.creditCard);
    submitOrderFrom.typeMonth(testData.month);
    submitOrderFrom.typeYear(testData.year);
    submitOrderFrom.clickOnPurchaseBtn();
    submitOrderFrom.ensureSuccessAllert(testData.successMessage);
    submitOrderFrom.sumbitSucessModal();
  });
});
