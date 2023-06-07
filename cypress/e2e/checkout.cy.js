//import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import CheckoutFlowPageObject from '../support/pages/checkout.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
const faker = require('faker');
/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const checkout = new CheckoutFlowPageObject();

const randomUser = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear()
};

describe('Checkout Flow', () => {
  before(() => {
homePage.visit();
  });

  it('Should provide the ability to order the product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    checkout.addToCart
    .click();
    checkout.assertAllert('Product added');
    checkout.goToCart
    .click();
    checkout.productInTheCart;
    checkout.placeOrder
    .click();
    checkout.userName
    .type(randomUser.name, {force: true});
    checkout.userCountry
    .type(randomUser.country, {force: true});
    checkout.userCity
    .type(randomUser.city, {force: true});
    checkout.userCreditCard
    .type(randomUser.creditCard, {force: true});
    checkout.userBirthdayMonth
    .type(randomUser.month);
    checkout.userBirthdayYear
    .type(randomUser.year);
    checkout.purchaseButton
    .click();
    checkout.assertEnteredData(randomUser.name, randomUser.creditCard);
    checkout.okButton
    .click();
  });
});
