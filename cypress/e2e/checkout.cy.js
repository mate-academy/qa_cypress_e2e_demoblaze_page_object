/// <reference types='cypress' />

import { CheckoutPageObject } from "../support/pages/Demoblaze.pageObject";
import ContactFormPageObject from "../support/pages/contactForm.pageObject";
const faker = require('faker');



describe('Demoblaze page', () => {
  const checkoutPage = new CheckoutPageObject();
  const cartData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.datatype.number(),
 };
  const checkcart = new ContactFormPageObject();

beforeEach(() => {
    cy.task('generateUser').then(generateUser => {
   user = generateUser;
    })
  })
 it('should visit the page and add the product to the cart', () => {
   checkoutPage.visit();
  checkoutPage.clickTheLaptopsLink();
  checkoutPage.sonylink.click();
  productPage.clickAddToCartButton();
  checkoutPage.assertaddedmessage;
  homePage.clickTheCartLink();
  checkcart.assertInTheCart;
  checkcart.clickOnPlaceOrder.click();
  checkcart.fillTheNameField(user.username);
  checkcart.countryField.type(cartData.country);
  checkcart.cityField.type(cartData.city);
  checkcart.creditCartField.type(cartData.creditCard)
  checkcart.monthField.type(cartData.month);
  checkcart.yearField.type(cartData.year);
  checkcart.purchaseButton.click();
   checkcart.confirmMessage;
  checkcart.clickOn.click();
});

