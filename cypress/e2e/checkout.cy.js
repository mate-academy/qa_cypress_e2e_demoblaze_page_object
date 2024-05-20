/// <reference types='cypress' />
import { homePage } from '../support/pages_New/homePage.pageObject';
import { productPage } from '../support/pages_New/productPAge.pageObject';
import { cartPage } from '../support/pages_New/cartPage.pageObject';
import { orderFlowPage } from '../support/pages_New/orderFlow.pageObject';

describe('Order flow', () => {
  let user;
  const productName = 'Sony vaio i7';
  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should provide the ability to order an item', () => {
    homePage.visit();
    homePage.clickTheLaptopLink();
    homePage.clickTheItemLink('Sony vaio i7');
    productPage.clickAddToCartButton();
    productPage.assertAlert('Product added');
    productPage.clickCartLink();
    cartPage.assertProductExistsInTheCart(productName);
    orderFlowPage.clickOrderButton();
    orderFlowPage.fillAllFields(user);
    orderFlowPage.clickPurchaseButton();
    orderFlowPage.verifyOrder(user);
  });
});
