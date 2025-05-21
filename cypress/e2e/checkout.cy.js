/* eslint-disable max-len */
/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import CheckoutFormPageObject from '../support/pages/checkoutForm.pageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const checkoutForm = new CheckoutFormPageObject();

const testData = {
  name: 'Test User',
  country: 'Ukraine',
  city: 'Kyiv',
  card: '1234 5678 9012 3456',
  month: '12',
  year: '2025'
};

describe('Checkout flow', () => {
  it('should complete purchase from product to confirmation using POM', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    productPage.clickAddToCart();
    productPage.assertAddToCartAlert();

    cartPage.clickOnCartLink();
    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.clickPlaceOrder();

    checkoutForm.fillForm(testData);
    checkoutForm.clickPurchase();
    checkoutForm.assertConfirmationContains(testData.name);
    checkoutForm.clickOk();
  });
});
