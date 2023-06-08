import faker from 'faker';
import HomePage from '../support/pages/homePage.cy';
import ProductPage from '../support/pages/productPage.cy';
import CartPage from '../support/pages/cartPage.cy';
import PlaceOrderPage from '../support/pages/placeOrderPage.cy';

/// <reference types="cypress" />

describe('Order - User is able to order the product', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const placeOrderPage = new PlaceOrderPage();

  beforeEach(() => {
    cy.viewport(1000, 600);
    homePage.visit();
  });

  it('should allow the user to order the product', () => {
    const testData = {
      category: 'Laptops',
      product: 'Sony vaio i7',
      name: faker.name.firstName(),
      country: faker.address.country(),
      city: faker.address.city(),
      cardNumber: faker.finance.creditCardNumber(),
      month: faker.date.month(),
      year: Cypress._.random(2023, 2030),
      successMessage: 'Thank you for your purchase'
    };

    homePage.clickOnCategory(testData.category);
    productPage.clickOnProduct(testData.product);
    productPage.clickAddToCart();
    productPage.verifyAlert();

    cartPage.clickOnLink('Cart');
    cartPage.verifyProduct(testData.product);

    cartPage.clickOnLink('Place Order');
    placeOrderPage.fillOrderForm(testData);
    placeOrderPage.clickPurchase();
    placeOrderPage.verifySuccessMessage(testData.successMessage);
    placeOrderPage.verifyOrderDetails(testData.name, testData.cardNumber);
    cy.get('.confirm').click();
    cy.visit('https://www.demoblaze.com/index.html');
  });
});
