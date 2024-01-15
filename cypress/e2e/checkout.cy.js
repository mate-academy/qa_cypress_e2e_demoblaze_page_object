/// <reference types='cypress' />

import { CheckoutPageObject } from "../support/pages/Demoblaze.pageObject";
import {ContactFormPageObject} from "../support/pages/contactForm.pageObject";
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
  success: 'Thank you for your purchase!'
 };
  const checkcart = new ContactFormPageObject();

beforeEach(() => {
    cy.task('generateUser').then(generateUser => {
   user = generateUser;
    })
  })
 it('should visit the page and add the product to the cart', () => {
  checkoutPage.visit();
  checkoutPage.clickOnCategory('Laptops');
  checkoutPage.clickOnProduct('Sony vaio i7');
  checkoutPage.clickOnButton('Add to cart');
  checkoutPage.assertAllert('Product added');
  checkoutPage.clickOnLink('Cart');
  checkcart.assertProductInTheCart('Sony viao 17');
  checkcart.clickOnButton('Place Order');
  checkcart.typeName(user.username);
  checkcart.typeCountry(cartData.country);
  checkcart.typeCity(cartData.city);
  checkcart.typeCreditCard(cartData.creditCard)
  checkcart.typeMonth(cartData.month);
  checkcart.typeYear(cartData.year);
  checkcart.clickOnButton('Purchase');
  checkcart.assertSuccessMessage(cartData.success);
  checkcart.assertName(cartData.name);
  checkcart.clickOnButton('OK');
});
});

