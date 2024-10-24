/// <reference types='cypress' />

import CheckoutPageObject from '../support/pages/checkout.pageObject';

const checkoutPage = new CheckoutPageObject();

describe('', () => {
  before(() => {
    checkoutPage.visit();
  });

  it('should test checkout', () => {
    checkoutPage.laptopsFieldClick();
    checkoutPage.laptopItemClick();
    checkoutPage.addToCartBtnClick();
    checkoutPage.alertMessage();
    checkoutPage.cartBtnClick();
    checkoutPage.assertCart();
    checkoutPage.placeOrderBtnClick();
    checkoutPage.fillNameField('Test');
    checkoutPage.fillCountryField('Romania');
    checkoutPage.fillCityField('Bucharest');
    checkoutPage.fillCreditCardField('123213123');
    checkoutPage.fillMonthField('12');
    checkoutPage.fillYearField('2022');
    checkoutPage.purchaseBtnClick();
    checkoutPage.assertSuccessModal();
    checkoutPage.confirmModal();
  });
});
