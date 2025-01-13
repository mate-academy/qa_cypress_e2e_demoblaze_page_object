import { faker } from '@faker-js/faker';
// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
/// <reference types="cypress" />
/// <reference types="../support" />

const homePage = new HomeAndCataloguePageObject();

const PRODUCT_NAME = 'Sony vaio i7';

const testData = {
  name: faker.name.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCart: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear()
};

describe('', () => {
  before(() => {
    homePage.visit();
  });

  it('Add Product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(PRODUCT_NAME);
    homePage.addToCart();
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    homePage.assertProduct(PRODUCT_NAME);
    homePage.clickOnOrder();

    homePage.typeName(testData.name);
    homePage.typeCountry(testData.country);
    homePage.typeCity(testData.city);
    homePage.typeCreditCart(testData.creditCart);
    homePage.typeMonth(testData.month);
    homePage.typeYear(testData.year);
    homePage.clickOnPurchase();
    homePage.assertEnteredData(testData.creditCart, testData.name);
  });
});
