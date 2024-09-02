/// <reference types='cypress' />

import HomePage from '../support/pages/HomePage';
import ProductPage from '../support/pages/ProductPage';
import CartPage from '../support/pages/CartPage';

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

describe('Demoblaze Order Flow.', () => {
  before(() => {
    homePage.visit();
  });

  it('should complete the purchase of a Sony vaio i7', () => {
    homePage.clickOnCategory('Laptops');
    productPage.selectProduct('Sony vaio i7');
    productPage.addToCart();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added');
    });

    homePage.goToCart();
    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.clickOnPlaceOrderButton();
    cartPage.fillOrderForm('John Doe', 'USA', 'New York', '1234567890123456', '12', '2024');
    cartPage.clickOnPurchaseButton();
    cartPage.assertOrderDetails('John Doe', '1234');
    cartPage.clickOkButton();
  });
});


