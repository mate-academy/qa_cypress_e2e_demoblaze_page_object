import HomeAndCataloguePageObject
from '../support/pages/homeСatalogue.pageObject';
import CartPage from '../support/pages/cartPage.pageObject';
import { faker } from '@faker-js/faker';

/// <reference types='cypress' />


const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPage();

describe('Checkout process', () => {
  
  before(() => {
    homePage.visit();
  });

  it('should complete the checkout process', () => {
    const orderDetails = {
      name: faker.name.firstName(),
      country: faker.address.country(),
      city: faker.address.city(),
      card: faker.finance.creditCardNumber(),
      month: faker.date.month(),
      year: faker.date.future().getFullYear().toString()
    };

    homePage.visit();

    homePage.clickOnCategory('Laptops');

    homePage.clickOnProduct('Sony vaio i7');

    cartPage.addToCart();

    cartPage.goToCart();

    cartPage.assertProductInCart('Sony vaio i7');

    cartPage.placeOrder();

    cy.wait(1000);
    cartPage.fillOrderForm(orderDetails);

    cartPage.purchase();

    cartPage.assertOrderData(orderDetails);

    cartPage.confirmOrder();

  });
});
