/// <reference types='cypress' />

import { homePage } from '../support/pages_MK/HomePageObj';
import { productPage } from '../support/pages_MK/ProductPage';
import { orderProcess } from '../support/pages_MK/OrderProcessPage';
import { cartPage } from '../support/pages_MK/CartPage';

describe('E2E FLOW', () => {
  let userInfo;
  const productName = 'Sony vaio i7';
  before(() => {
    cy.task('generateUser').then((generateUser) => {
      userInfo = generateUser;
    });
  });
  it('should provide an ability to order the laptop', () => {
    homePage.visit();

    homePage.clickTheLaptopLink();

    homePage.clickTheItemLink(productName);

    productPage.clickAddToCartButton();

    cartPage.clickToCartLink();

    cartPage.assertProductExistsInTheCart(productName);

    orderProcess.clickOrderButton();

    orderProcess.fillAllFields(userInfo);

    orderProcess.clickPurchaseButton();

    orderProcess.verifyOrder(userInfo);
  });
});
