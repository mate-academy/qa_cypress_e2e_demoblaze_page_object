/// <reference types="cypress" />
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const testData = {
  category: 'Laptops',
  productName: 'Sony vaio i7',
  link: 'Cart',
  user: {
    name: faker.name.findName(),
    country: faker.address.country(),
    city: faker.address.city(),
    card: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.date.past().getFullYear()
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
    homePage.fillTheField('name', testData.user.name);
    homePage.fillTheField('country', testData.user.country);
    homePage.fillTheField('city', testData.user.city);
    homePage.fillTheField('card', testData.user.card);
    homePage.fillTheField('month', testData.user.month);
    homePage.fillTheField('year', testData.user.year);
    homePage.clickOnButton('Purchase');
    homePage.assertModalSuccess(testData.message, testData.user.card, testData.user.name);
    homePage.clickOnButtonModal('OK');
  });
});
