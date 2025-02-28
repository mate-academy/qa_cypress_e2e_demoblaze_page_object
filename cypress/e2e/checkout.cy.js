import { faker } from '@faker-js/faker';
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';

/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const PRODUCT_NAME = 'Sony vaio i7';

const testData = {
  name: faker.name.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear()
};

describe('Laptops', () => {
  before(() => {
    homePage.visit();
  });

  it('should complete the purchase flow successfully', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(PRODUCT_NAME);
    homePage.addToCart();
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');

    cartPage.assertProductInCart(PRODUCT_NAME);
    cartPage.clickOnPlaceOrder();
    cartPage.fillForm(testData);
    cartPage.clickOnPurchase();
    cartPage.assertEnteredData(testData.card, testData.name);
    cartPage.clickOnOk();
  });
});
