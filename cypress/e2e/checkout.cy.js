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
    laptopsPage.clickSony();
    laptopsPage.addToCart();
    laptopsPage.getAlert();

    cy.contains('Cart').click();
    cartPage.assertCart('Sony vaio i7');
    cartPage.clickOrder();

    orderPage.fillAllFields();
    orderPage.clickPurchase();
    orderPage.clickOk();
  });
});
