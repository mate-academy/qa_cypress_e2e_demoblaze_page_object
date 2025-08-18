/// <reference types="cypress" />

import HomePage from '../support/pages/HomePage';
import CartPage from '../support/pages/CartPage';
import CheckoutPage from '../support/pages/CheckoutPage';

describe('Demoblaze checkout flow', () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  const customer = {
    name: 'Vlad Tkachuk',
    country: 'Ukraine',
    city: 'Kyiv',
    creditCard: '1234 5678 9012 3456',
    month: '08',
    year: '2025'
  };

  it('should purchase a Sony vaio i7 laptop', () => {
    // Visit home page
    homePage.visit();

    // Go to Laptops and select Sony vaio i7
    homePage.goToCategory('Laptops');
    homePage.selectProduct('Sony vaio i7');
    homePage.addToCart();
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Product added');
    });

    // Go to cart and check product
    homePage.goToCart();
    cartPage.verifyProductInCart('Sony vaio i7');

    // Place order
    cartPage.placeOrder();
    checkoutPage.fillForm(customer);
    checkoutPage.purchase();

    // Assert modal content
    checkoutPage.verifyPurchaseData(customer);
    checkoutPage.confirmOk();
  });
});
