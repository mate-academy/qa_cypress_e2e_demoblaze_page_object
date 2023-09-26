/// <reference types='cypress' />

import faker from 'faker';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';

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
       min: 2021,
       max: 2031
     })
   },
   messageText: 'Thank you for your purchase!'
 };

describe('', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to add product to the cart and order', () => {
    homePage.clickOnCategory(testData.categoryName);
    homePage.clickOnProduct(testData.productName);
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink(testData.link);
    homePage.assertProductInCart(testData.productName);
    homePage.clickOnButton('Place Order');
    homePage.fillTheField('name', testData.placeOrderFields.name);
    homePage.fillTheField('country', testData.placeOrderFields.country);
    homePage.fillTheField('city', testData.placeOrderFields.city);
    homePage.fillTheField('card', testData.placeOrderFields.card);
    homePage.fillTheField('month', testData.placeOrderFields.month);
    homePage.fillTheField('year', testData.placeOrderFields.year);
    homePage.clickOnButton('Purchase');
    homePage.assertAllert('Product added');
    //homePage.assertPurchaseSuccess(testData.messageText, testData.placeOrderFields.card, testData.placeOrderFields.name);
    homePage.clickOnButton('OK');
  });
});
