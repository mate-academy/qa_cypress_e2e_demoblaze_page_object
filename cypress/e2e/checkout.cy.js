// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CartPage from '../support/pages/cartPage.pageObject';
import { faker } from '@faker-js/faker';

/// <reference types='cypress' />

const orderDetails = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear().toString()
};

describe('Checkout process', () => {
  const homePage = new HomeAndCataloguePageObject();
  const cartPage = new CartPage();

  before(() => {
    homePage.visit();
  });

  it('should complete the checkout process', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    cartPage.addToCart();
    cartPage.goToCart();
    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.placeOrder();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cartPage.fillOrderForm(orderDetails);
    cartPage.purchase();
    cartPage.assertOrderData(orderDetails);
    cartPage.confirmOrder();
  });
});
