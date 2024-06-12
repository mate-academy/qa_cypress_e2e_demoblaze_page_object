/// <reference types='cypress' />

import faker from 'faker';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();
const testData = {
  categoryName: 'Laptops',
  productName: 'Sony vaio i7',
  link: 'Cart',
  placeOrderFields: {
    name: faker.name.firstName(),
    country: faker.address.country(),
    city: faker.address.city(),
    card: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.datatype.number({
      min: 2024,
      max: 2029
    })
  },
  messageText: 'Thank you for your purchase!'
};

describe('Full purchase', () => {
  before(() => {
    homePage.visit();
  });

  it('should add product to the cart and place order', () => {
    homePage.clickOnCategory(testData.categoryName);
    homePage.clickOnProduct(testData.productName);
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink(testData.link);
    homePage.assertProductInCart(testData.productName);
    homePage.clickOnButton('Place Order');
    homePage.waitTime(500);
    homePage.fillField('name', testData.placeOrderFields.name);
    homePage.fillField('country', testData.placeOrderFields.country);
    homePage.fillField('city', testData.placeOrderFields.city);
    homePage.fillField('card', testData.placeOrderFields.card);
    homePage.fillField('month', testData.placeOrderFields.month);
    homePage.fillField('year', testData.placeOrderFields.year);
    homePage.clickOnButton('Purchase');
    homePage.assertAllert('Product added');
    homePage.assertSuccess(
      testData.messageText,
      testData.placeOrderFields.card,
      testData.placeOrderFields.name
    );
    homePage.clickOnButton('OK');
  });
});
