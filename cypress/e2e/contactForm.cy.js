import HomePageObject from '../support/pages/home.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import faker from 'faker';

/// <reference types='cypress' />

const homePage = new HomePageObject();
const cartPage = new CartPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: 'December',
  year: '2023'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should add product to cart and place order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnAddToCart();
    homePage.assertAlert('Product added');
    homePage.clickOnCart();
    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.clickOnPlaceOrder();
    cartPage.fillAllFields(testData);
    cartPage.clickOnPurchase();
    cartPage.assertDataOnModal(testData);
    cartPage.clickOnOk();
  });
});
