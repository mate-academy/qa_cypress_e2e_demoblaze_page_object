import CheckoutPageObject from '../support/pages/checkout.pageObject.js';

const checkout = new CheckoutPageObject();
const assertMessage = 'Product added';

describe('Ordering product', () => {
  before(() => {
    cy.visit('/index.html');
  });

  it('should have an ability to order product', () => {
    checkout.clickOnCategory();
    checkout.clickOnLaptop();
    checkout.clickOnAddToCartBtn();
    checkout.acessAlert();
    checkout.clickOnCart();
    checkout.clickOnPlaceOrderBtn();
    checkout.fillPlaceOrderForm();
    checkout.assertEnteredDataIsShown();
  });
});
