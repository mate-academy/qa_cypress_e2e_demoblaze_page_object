import OrderAndCartPageObject from '../support/pages/cartForm.pageObject';
// eslint-disable-next-line
import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import { faker } from '@faker-js/faker';
/// <reference types='cypress' />

const orderForm = new OrderAndCartPageObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.number.int({ min: 2020, max: 2025 }),
  successMessage: 'Product added'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit('/');
  });

  it('should provide the ability to purchase a product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert(testData.successMessage);
    homePage.clickOnLink('Cart');
    homePage.clickOnBtn('Place Order');
    orderForm.typeName(testData.name);
    orderForm.typeCountry(testData.country);
    orderForm.typeCity(testData.city);
    orderForm.typeCreditCard(testData.card);
    orderForm.typeMonth(testData.month);
    orderForm.typeYear(testData.year);
    orderForm.clickOnPurchaseBtn();
    orderForm.clickOnOkBtn();
  });
});
