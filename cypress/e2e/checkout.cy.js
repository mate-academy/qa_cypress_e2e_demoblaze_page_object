/// <reference types="cypress" />
const { testData } = require('../support/testData');

import CartPagePageObject from '../support/pages/cartPage.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import PlaceOrderPageObject from '../support/pages/placeOrder.pageObject';
import ProductPagePageObject from '../support/pages/productPagePageObject';

const testInfo = testData();

const cartPage = new CartPagePageObject();
const homePage = new HomeAndCataloguePageObject();
const placeOrder = new PlaceOrderPageObject();
const productPage = new ProductPagePageObject();

describe('assert the purchase', () => {
  before(() => {
    cy.visit('/')
  });

  it('should allow to buy a product', () => {
    homePage.clickOnCategory(testInfo.category);
    homePage.clickOnProduct(testInfo.product);

    productPage.productAssert(testInfo.product);
    productPage.addToCartButton.click();
    productPage.assertAllert(testInfo.alertMessage);
    homePage.clickOnLink(testInfo.cart);

    cartPage.productAssertInCart(testInfo.product);
    cartPage.PlaceOrderButton.click();

    placeOrder.nameField.type(testInfo.firstName, {force: true});
    placeOrder.countryField.type(testInfo.country);
    placeOrder.cityField.type(testInfo.city);
    placeOrder.cardField.type(testInfo.creditCart);
    placeOrder.monthField.type(testInfo.month);
    placeOrder.yearField.type(testInfo.year);
    placeOrder.purchaseButton.click();
    placeOrder.assertPurchaseCard(testInfo.creditCart);
    placeOrder.assertPurchaseName(testInfo.firstName);
    placeOrder.submitPurchaseButton.click();
  });
});
