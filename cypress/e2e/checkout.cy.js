/// <reference types='cypress' />

import { faker } from '@faker-js/faker';
import CartPageObject from '../support/pages/cart.pageObject';

const CartPage = new CartPageObject();

const testData = {
  info: {
    name: faker.person.firstName(),
    country: faker.location.country(),
    city: faker.location.city(),
    creditCard: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.date.anytime().getFullYear()
  },
  productName: 'Sony vaio i7',
  successMessage: 'Product added'
};

describe('', () => {
  beforeEach(() => {
    CartPage.visit('/');
    CartPage.onClickLaptops();
    CartPage.onClickProduct(testData.productName);
    CartPage.onClickAddToCart();
  });

  it('should add propduct to the cart', () => {
    CartPage.assertAllert(testData.successMessage);
  });

  it('should purchase products in the cart', () => {
    CartPage.onClickCart();
    cy.contains(testData.productName);
    CartPage.onClickPlaceOrder();
    CartPage.fillOrderDetails(testData.info);
    CartPage.onClickPurchase();
    CartPage.assertOrderDetails(testData.info);
    CartPage.onClickOkButton();
  });
});
