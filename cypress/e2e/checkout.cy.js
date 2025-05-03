/// <reference types='cypress' />

import HomePage from '../support/pages/HomePage';
import ProductPage from '../support/pages/ProductPage';
import CartPage from '../support/pages/CartPage';
import OrderPage from '../support/pages/OrderPage';

describe('Demoblaze Checkout Flow - POM', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const orderPage = new OrderPage();

  it('Completes checkout for a laptop', () => {
    homePage.visit();

    homePage.selectCategory('Laptops');
    homePage.selectProduct('Sony vaio i7');

    productPage.addToCart();
    productPage.verifyAlert('Product added');

    homePage.goToCart();
    cartPage.verifyProductInCart('Sony vaio i7');

    cartPage.placeOrder();
    orderPage.fillOrderForm({
      name: 'Test User',
      country: 'Poland',
      city: 'Warsaw',
      card: '1234567890',
      month: 'May',
      year: '2025'
    });
    orderPage.purchase();

    orderPage.verifyConfirmationContains('Test User');
    orderPage.confirmOrder();
  });
});
