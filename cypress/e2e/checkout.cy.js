import PlaceAnOrderPageObject
  from '../support/pages/PlaceAnOrder.pageObject.js';
import PageObject from '../support/PageObject.js';
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
const { faker } = require('@faker-js/faker');

const ProductPage = new PlaceAnOrderPageObject();
const homePage = new HomeAndCataloguePageObject();
const alertAssertion = new PageObject();
const cartPage = new PlaceAnOrderPageObject();
const submitOrderForm = new PlaceAnOrderPageObject();

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
    ProductPage.clickOnAddToCartBtn();
    alertAssertion.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.ensureProductInCart('Sony vaio i7');
    cartPage.openPlaceOrderForm();
    submitOrderForm.typeName(testData.name);
    submitOrderForm.typeCountry(testData.country);
    submitOrderForm.typeCity(testData.city);
    submitOrderForm.typeCreditCard(testData.creditCard);
    submitOrderForm.typeMonth(testData.month);
    submitOrderForm.typeYear(testData.year);
    submitOrderForm.clickOnPurchaseBtn();
    submitOrderForm.ensureSuccessAlert(testData.successMessage);
    submitOrderForm.sumbitSuccessModal();
  });
});
