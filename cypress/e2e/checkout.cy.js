/// <reference types='cypress' />

import HomePage from '../support/pages/HP.pageObject';
import LaptopsPage from '../support/pages/laptops.pageObject';
import CartPage from '../support/pages/cart.pageObject';
import OrderPage from '../support/pages/makeOrder.pageObject';

describe('Purchase Laptop', () => {
  const homePage = new HomePage();
  const laptopsPage = new LaptopsPage();
  const cartPage = new CartPage();
  const orderPage = new OrderPage();

  it('Should make the purchase', () => {
    homePage.visit();
    homePage.clickLaptops();
    laptopsPage.clickTheCategory();
    laptopsPage.addToCart();
    laptopsPage.assertAlert();

    cartPage.cartLink();
    cartPage.assertCartContainsProduct('Sony vaio i7');
    cartPage.clickOrderButton();

    orderPage.fillNameField();
    orderPage.fillCountryField();
    orderPage.fillCityField();
    orderPage.fillCardField();
    orderPage.fillMonthField();
    orderPage.fillYearField();

    orderPage.clickPurchaseButton();
    orderPage.assertOrder();
    orderPage.clickOk();
  });
});
