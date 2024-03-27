/// <reference types='cypress' />

import { CheckoutPageObject } from '../support/pages/checkout.pageObject';

describe('Demoblaze app', () => {
  let customer;

  beforeEach(() => {
    cy.task('generateCustomer').then((generateCustomer) => {
      customer = generateCustomer;
    });
  });

  it('should provide an ability to buy an itemm', () => {
    const checkoutPage = new CheckoutPageObject();
    checkoutPage.visit();
    checkoutPage.selectLaptop();
    checkoutPage.addToCart();
    checkoutPage.verifyProductAdded();
    checkoutPage.fillCustomerData(customer);
    checkoutPage.purchase();
    checkoutPage.verifyPurchaseConfirmation(customer);
  });
});
