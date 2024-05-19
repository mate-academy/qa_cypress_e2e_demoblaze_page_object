import { homePage } from '../support/pages/homePage';
import { productPage } from '../support/pages/productPage';
import { cartPage } from '../support/pages/cartPage';
import { orderPage } from '../support/pages/orderPage';

describe('E2E Checkout Test', () => {
  const productName = 'Sony vaio i7';
  const orderDetails = {
    name: 'Zdzisiu Wuj',
    country: 'USA',
    city: 'New York',
    creditCard: '1234 5678 9101 1121',
    month: '12',
    year: '2025'
  };

  it('should complete the purchase flow successfully', () => {
    homePage.visit();

    homePage.clickLaptops();

    homePage.selectProduct(productName);

    productPage.addToCart();

    cartPage.goToCart();

    cartPage.verifyProductInCart(productName);

    cartPage.placeOrder();

    orderPage.fillOrderDetails(orderDetails);

    orderPage.purchase();

    orderPage.verifyOrderDetails(orderDetails);

    orderPage.confirmOrder();
  });
});
