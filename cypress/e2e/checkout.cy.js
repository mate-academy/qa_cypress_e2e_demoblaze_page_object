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
    // Navigate using POM
    homePage.clickLaptops();
    homePage.selectProduct('Sony vaio i7');

    // Add to cart and verify alert
    checkoutPage.addToCart();
    checkoutPage.assertProductAddedAlert();

    // Go to cart and assert product is listed
    cartPage.openCart();
    cartPage.assertProductInCart('Sony vaio i7');

    // Place order
    cartPage.clickPlaceOrder();

    // Ensure modal is visible before typing
    checkoutPage.ensureOrderModalVisible();

    // Fill out form
    checkoutPage.fillOrderForm({
      name: 'John Doe',
      country: 'USA',
      city: 'New York',
      card: '4111111111111111',
      month: '12',
      year: '2025'
    });

    // Purchase and validate confirmation
    checkoutPage.purchase();

    checkoutPage.assertConfirmationContains({
      card: '4111111111111111',
      namePart: 'John' // ✅ only check first name to handle truncation
    });

    // Confirm the purchase
    checkoutPage.confirmPurchase();
  });
});
