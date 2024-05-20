/// <reference types='cypress' />
import { cartPage } from '../support/pages/cartPage';
import { mainPage } from '../support/pages/mainPage';
import { productPage } from '../support/pages/productPage';
import { orderPage } from '../support/pages/orderPage';

describe('The first FLOW', () => {
  let user;
  const productName = 'Sony vaio i7';
  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should provide an ability to purchase the laptop', () => {
    mainPage.visit();

    mainPage.clickTheLaptopLink();

    mainPage.clickTheItemLink(productName);

    productPage.clickAddToCartButton();

    cartPage.clickCartLink();

    cartPage.assertProductExistInCart(productName);

    orderPage.clickOrderButton();

    orderPage.fillAllFields(user);

    orderPage.clickPurchaseButton();

    orderPage.verifyOrder(user);
  });
});
