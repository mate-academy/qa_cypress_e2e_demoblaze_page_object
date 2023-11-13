/// <reference types='cypress' />
import CheckoutPageObject from '../support/pages/checkout.pageObject.js';

const checkout = new CheckoutPageObject();
const assertMessage = 'Product added';

describe('Ordering product', () => {
  before(() => {
    cy.visit('/index.html');
  });

  it('should have an ability to order product', () => {
    checkout.clickOnLaptopsBtn();
    checkout.clickOnSonyVioI7Btn();
    checkout.clickOnaddToCartBtn();
    checkout.assertAllert(assertMessage);
    checkout.clickOnCartBtn();
    checkout.verifyProductTitle();
    checkout.clickOnPlaceOrderBtn();
    checkout.typeName();
    checkout.typeCountry();
    checkout.typeCity();
    checkout.typeCreditCard();
    checkout.typeCreditCardMonth();
    checkout.typeCreditCardYear();
    checkout.clickOnPurchaseBtn();
    checkout.verifyName();
    checkout.verifyCardNumber();
    checkout.clickOnOKBtn();
  });
});
