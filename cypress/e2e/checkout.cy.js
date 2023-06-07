import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';

/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();

const testData = {
  category: 'Laptops',
  productName: 'Sony vaio i7',
  link: 'Cart',
  orderFields: {
    name: faker.name.firstName(),
    country: faker.address.country(),
    city: faker.address.city(),
    card: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.datatype.number({
      min: 2023,
      max: 2030
    })
  },
  message: 'Thank you for your purchase!'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide ability to purchase product', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.productName);
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink(testData.link);
    homePage.assertProductInCart(testData.productName);
    homePage.clickOnButton('Place Order');
    homePage.fillTheField('name', testData.orderFields.name);
    homePage.fillTheField('country', testData.orderFields.country);
    homePage.fillTheField('city', testData.orderFields.city);
    homePage.fillTheField('card', testData.orderFields.card);
    homePage.fillTheField('month', testData.orderFields.month);
    homePage.fillTheField('year', testData.orderFields.year);
    homePage.clickOnButton('Purchase');
    homePage.assertModalSuccess(testData.message, testData.orderFields.card, testData.orderFields.name);
    homePage.clickOnButtonModal('OK');
  });
});
