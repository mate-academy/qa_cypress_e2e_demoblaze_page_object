import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPage from '../support/pages/productPage';
import CartPage from '../support/pages/cartPage';
import PlaceOrderPage from '../support/pages/placeOrderPage';

/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPage();
const cartPage = new CartPage();
const placeOrderPage = new PlaceOrderPage();
const { generateUser } = require('../support/generateUser');

const testData = {
  successAddingMessage: 'Product added',
  successPurchaseMessage: 'Thank you for your purchase!',
  productName: 'Sony vaio i7',
  category: 'Laptops'
};

describe('Product order', () => {
  const {
    name,
    country,
    city,
    card,
    month,
    year
  } = generateUser();

  beforeEach(() => {
    homePage.visit();
  });

  it('should provide an ability to add product to the cart and place the order', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.productName);

    productPage.addToCartBtn
      .click();
    productPage.assertAllert(testData.successAddingMessage);

    cartPage.clickOnCart();
    cartPage.checkProductInCart(testData.productName);
    cartPage.clickOnPlaceOrderBtn();
    placeOrderPage.nameInput
      .type(name);
    placeOrderPage.countryInput
      .type(country);
    placeOrderPage.cityInput
      .type(city);
    placeOrderPage.creditCardInput
      .type(card);
    placeOrderPage.monthInput
      .type(month);
    placeOrderPage.yearInput
      .type(year);
    placeOrderPage.clickOnPurchaseBtn();
    placeOrderPage.assertPurchase(testData.successPurchaseMessage);
    placeOrderPage.confirmPurchase();
  });
});
