/// <reference types="cypress" />

import HomePage from '../support/pages/home';
import CartPage from '../support/pages/cart';
import CheckoutPage from '../support/pages/checkout';

const homePage = new HomePage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe('Checkout Flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow user to purchase a Sony vaio i7 laptop', () => {
    homePage.clickLaptops();
    homePage.selectProduct('Sony vaio i7');

    checkoutPage.addToCart();
    checkoutPage.assertProductAddedAlert();

    cartPage.openCart();
    cartPage.assertProductInCart('Sony vaio i7');

    cartPage.clickPlaceOrder();

    checkoutPage.ensureOrderModalVisible();

    checkoutPage.fillOrderForm({
      name: 'John Doe',
      country: 'USA',
      city: 'New York',
      card: '4111111111111111',
      month: '12',
      year: '2025'
    });

    checkoutPage.purchase();

    checkoutPage.assertConfirmationContains({
      card: '4111111111111111',
      namePart: 'John'
    });

    checkoutPage.confirmPurchase();
  });
});
