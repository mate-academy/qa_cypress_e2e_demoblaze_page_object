/// <reference types="cypress" />
import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import faker from "faker";
const homePage = new HomeAndCataloguePageObject();
const testData = {
  category:'Laptops',
  productName: 'Sony vaio i7',
  orderData: {
    name: faker.name.firstName(),
    country: faker.address.country(),
    city: faker.address.city(),
    card: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.datatype.number({
      min: 2023,
      max: 2028
    })
  },
  message: 'Thank you for your purchase!'
};
describe('should complete the flow Checkout', () => {
  before(() => {
    homePage.visit()
  });

 it('should provide a ability to purchase item', () => {
  homePage.clickOnCategory(testData.category);
  homePage.clickOnProduct(testData.productName);
  homePage.clickOnButton('Add to cart');
  homePage.assertProductAdded('Product added');
  homePage.goToCart('Cart');
  homePage.assertProductInCart(testData.productName);
  homePage.clickPlaceOrder('Place order');
  homePage.fillOrderForm('name',testData.orderData.name);
  homePage.fillOrderForm('country',testData.orderData.country);
  homePage.fillOrderForm('city',testData.orderData.city);
  homePage.fillOrderForm('card',testData.orderData.card);
  homePage.fillOrderForm('month',testData.orderData.month);
  homePage.fillOrderForm('year',testData.orderData.year);
  homePage.clickOnButton('Purchase');
  homePage.assertOrderConfirmationModal('Visible');
  homePage.assertOrderConfirmationSuccess(testData.message, testData.orderData.card, testData.orderData.name);
  homePage.clickOk('Ok');
  });
});
