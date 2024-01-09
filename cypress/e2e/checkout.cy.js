/// <reference types='cypress' />

import { CheckoutPageObject } from "../support/pages/Demoblaze.pageObject";
import ContactFormPageObject from "../support/pages/contactForm.pageObject";



describe('Demoblaze page', () => {
  const checkoutPage = new CheckoutPageObject();
  let user;
  const checkcart = new ContactFormPageObject();

beforeEach(() => {
    cy.task('generateUser').then(generateUser => {
   user = generateUser;
    })
  })
 it('should visit the page and add the product to the cart', () => {
    checkoutPage.visit();
    checkoutPage.laptopslink.click();
    checkoutPage.sonylink.click();
    checkoutPage.addToCart.click();
    checkoutPage.assertaddedmessage;
});

it.only('should be able to check the cart and purchase an order', () => {
  checkoutPage.visit();
  checkoutPage.laptopslink.click();
  checkoutPage.sonylink.click();
  checkoutPage.addToCart.click();
  checkoutPage.assertaddedmessage;

  checkcart.carturl.click();
  checkcart.assertInTheCart;
  checkcart.clickOnPlaceOrder.click();
  checkcart.nameField.type(user.username);
  checkcart.countryField.type('USA');
  checkcart.cityField.type('New York');
  checkcart.creditCartField.type('1478569874569874')
  checkcart.monthField.type('3');
  checkcart.yearField.type('2022');
  checkcart.purchaseButton.click();
  checkcart.confirmMessage;
  checkcart.clickOn.click();
});
});
