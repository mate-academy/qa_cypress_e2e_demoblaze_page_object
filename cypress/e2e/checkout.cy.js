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
  const cardNumber = '5555444433332222';
  const name = 'Mariia';

  it('Should make the purchase', () => {
    homePage.visit();
    homePage.clickLaptops();
    laptopsPage.clickTheCategory('Sony vaio i7');
    laptopsPage.addToCart();
    laptopsPage.assertAlert();

    cartPage.clickTheCartLink();
    cartPage.assertCartContainsProduct('Sony vaio i7');
    cartPage.clickOrderButton();

    orderPage.fillNameField.type(name);
    orderPage.fillCountryField.type('Ukraine');
    orderPage.fillCityField.type('Kyiv');
    orderPage.fillCardField.type(cardNumber);
    orderPage.fillMonthField.type('07');
    orderPage.fillYearField.type('2026');

    orderPage.clickPurchaseButton();
    orderPage.assertOrderCard(cardNumber);
    //orderPage.assertOrderName(name);
    orderPage.clickOkButton();
  });
});
