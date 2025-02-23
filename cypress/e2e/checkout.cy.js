/// <reference types='cypress' />
import HomePage from '../support/pages/HomePage';
import CartPage from '../support/pages/CartPage'; // Ensure correct relative path
import OrderPage from '../support/pages/OrderPage'; // Ensure correct relative path

describe('Demoblaze Checkout Flow', () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const orderPage = new OrderPage();

  beforeEach(() => {
    homePage.visit();
  });

  it('should complete the checkout flow', () => {
    homePage.clickOnLaptops();
    homePage.clickOnSonyVaio();
    homePage.clickAddToCart();
    homePage.assertAlertMessage('Product added');

    homePage.clickOnCart();
    cartPage.assertProductInCart('Sony vaio i7');

    cartPage.clickPlaceOrder();

    orderPage.fillOrderForm({
      name: 'John Doe',
      country: 'United States',
      city: 'New York',
      card: '1234567890123456',
      month: '12',
      year: '2025'
    });

    orderPage.clickPurchase();
    orderPage.assertPurchaseDetails('John Doe', 'United States', 'New York');

    orderPage.clickOkOnModal();
  });
});
