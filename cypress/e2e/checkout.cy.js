/// <reference types='cypress' />
import { HomePage, ProductPage, CartPage } from '../PageObject';

describe('Demoblaze Checkout Flow', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();

  it('should complete checkout flow', () => {
    // Home Page
    homePage.visit('/');
    homePage.clickCategory('Laptops');
    homePage.clickProduct('Sony vaio i7');

    // Product Page
    productPage.addToCart();
    productPage.assertAlert('Product added.');

    // Cart Page
    homePage.navigateToCart();
    cartPage.assertProductInCart('Sony vaio i7');

    cartPage.placeOrder();

    const orderData = {
      name: 'John Doe',
      country: 'USA',
      city: 'New York',
      card: '1234567890123456',
      month: '12',
      year: '2025'
    };

    cartPage.fillOrderForm(orderData);
    cartPage.purchase();
    cartPage.assertPurchaseData(orderData);
    cartPage.confirmOk();
  });
});
