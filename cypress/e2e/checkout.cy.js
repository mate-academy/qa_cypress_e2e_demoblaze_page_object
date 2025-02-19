/* eslint-disable max-len */
/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';

const homeCalalogue = new HomeAndCataloguePageObject();
const cart = new CartPageObject();
const category = 'Laptops';
const item = 'Sony vaio i7';
const alertMessage = 'Product added';

describe('', () => {
  let formData;

  before(() => {
    cy.task('generateOrderInfo').then((data) => {
      formData = data;
      homeCalalogue.visit();
    });
  });

  it('', () => {
    homeCalalogue.clickOnCategory(category);
    homeCalalogue.clickOnProduct(item);
    homeCalalogue.addToCart();
    homeCalalogue.assertAllert(alertMessage);
    homeCalalogue.clickOnLink('Cart');
    cart.itemIsInCart(item);
    cart.placeOrderBtn();
    cart.typeName(formData.name);
    cart.typeCountry(formData.country);
    cart.typeCity(formData.city);
    cart.typeCreditCardNum(formData.creditCardNumber);
    cart.typeYear(formData.year);
    cart.typeMonth(formData.month);
    cart.purchaseOrderBtn();
    cart.assertSuccessfulPurchase();
    cart.assertPurchaseInfo('Name', formData.name);
    cart.assertPurchaseInfo('Card Number', formData.creditCardNumber);
    cart.pressOkBtn();
    cart.closePurchaseForm();
  });
});
