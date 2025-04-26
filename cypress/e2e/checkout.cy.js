/* eslint-disable max-len */
/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import CartPageObject from '../support/pages/CartPageObject';
import CheckoutPageObject from '../support/pages/CheckoutPageObject';
import { faker } from '@faker-js/faker';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();
const checkoutPage = new CheckoutPageObject();

const testData = {
  productName: 'Sony vaio i7',
  alertMessage: 'Product added',
  name: faker.name.fullName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: '12',
  year: '2025'
};

describe('Checkout Flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should complete the checkout process for Sony vaio i7', () => {
    // Navigate to Laptops category and select Sony vaio i7
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(testData.productName);

    // Add to cart and verify alert
    homePage.clickAddToCart();
    homePage.assertAllert(testData.alertMessage);

    // Navigate to Cart and verify product
    homePage.clickOnLink('Cart');
    cartPage.assertProductInCart(testData.productName);

    // Proceed to checkout
    cartPage.clickPlaceOrderBtn();

    // Fill checkout form
    checkoutPage.typeName(testData.name);
    checkoutPage.typeCountry(testData.country);
    checkoutPage.typeCity(testData.city);
    checkoutPage.typeCard(testData.card);
    checkoutPage.typeMonth(testData.month);
    checkoutPage.typeYear(testData.year);

    // Submit purchase and verify modal data
    checkoutPage.clickPurchaseBtn();
    checkoutPage.assertModalData(testData);

    // Close modal
    checkoutPage.clickOkBtn();
  });
});
