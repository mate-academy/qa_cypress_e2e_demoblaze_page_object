/// <reference types='cypress' />

import CheckoutPageObject from '../support/pages/Demoblaze.pageObject';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';
const faker = require('faker');



describe('Demoblaze page', () => {
  const checkoutPage = new CheckoutPageObject();
  const homePage = new ContactFormPageObject();
  const cartData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.datatype.number(),
  success: 'Thank you for your purchase!'
 };
  

before(() => {
    cy.task('generateUser').then(generateUser => {
   user = generateUser;
    })
  homePage.visit();
  })
  
 it('should visit the page and add the product to the cart', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    checkoutPage.clickOnaddToCartBtn();
    checkoutPage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    checkoutPage.itemInCart('Sony vaio i7');
    checkoutPage.clickOnplaceOrderBtn();
    checkoutPage.typeName(cartData.name);
    checkoutPage.typeCountry(cartData.country);
    checkoutPage.typeCity(cartData.city);
    checkoutPage.typeCard(cartData.creditCard);
    checkoutPage.typeMonth(cartData.month);
    checkoutPage.typeYear(cartData.year);
    checkoutPage.clickOnmakePurchaseBtn();
    checkoutPage.purchaseDone(cartData.success);
    checkoutPage.purchaseDone(cartData.name);
    checkoutPage.purchaseDone(cartData.creditCard);
  });
});

