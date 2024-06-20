/// <reference types='cypress' />
import ItemPageObject from '../support/pages/item.pageObject.js';
import CartPageObject from '../support/pages/cart.pageObject.js';

const item = new ItemPageObject();
const cart = new CartPageObject();

describe('Ordering product', () => {
  before(() => {
    cy.visit('/index.html');
  });

  it('should have an ability to order product', () => {
    item.clickOnLaptopsBtn();
    item.clickOnSonyVioI7Btn();
    item.clickOnaddToCartBtn();
    cy.on('window:alert', (str) => {
      expect(str).to.contains('Product added');
    });
    item.clickOnCartBtn();
    cart.verifyProductTitle();
    cart.clickOnPlaceOrderBtn();
    cart.typeName();
    cart.typeCountry();
    cart.typeCity();
    cart.typeCreditCard();
    cart.typeCreditCardMonth();
    cart.typeCreditCardYear();
    cart.clickOnPurchaseBtn();
    cart.verifyName();
    cart.verifyCardNumber();
    cart.clickOnOKBtn();
  });
});
