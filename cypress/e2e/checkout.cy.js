/// <reference types='cypress' />

import { goToLaptop } from '../support/pages_MK/HomePageObj';
import { addedProduct } from '../support/pages_MK/AddProductToCart';
import { orderProcess } from '../support/pages_MK/OrderProcess';
describe('E2E FLOW', () => {
  let userInfo;
  const productName = 'Sony vaio i7';
  before(() => {
    cy.task('generateUser').then((generateUser) => {
      userInfo = generateUser;
    });
  });

  it('should provide the flow of ordering items', () => {
    goToLaptop.visit();

    goToLaptop.reachLaptopPage();

    goToLaptop.reachItemPage(productName);

    addedProduct.addProduct();

    addedProduct.goToCart();

    addedProduct.assertProduct(productName);

    orderProcess.clickOrderButton();

    orderProcess.fillAllField(userInfo);

    orderProcess.clickPurchaseButton();

    orderProcess.verifyOrder(userInfo);
  });
});
