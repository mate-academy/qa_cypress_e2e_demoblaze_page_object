import HomePageObject from '../support/pages/homeСatalogue.pageObject';
import CheckoutPageObject from '../support/pages/checkout.pageObject';
const { faker } = require('@faker-js/faker');
/// <reference types='cypress' />

const homePage = new HomePageObject();
const checkout = new CheckoutPageObject();

const testData = {
  email: faker.internet.email(),
  name: faker.person.firstName(),
  coutry: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: Math.floor(Math.random() * (2024 - 1900 + 1)) + 1900,
  successMessage: 'Thank you for your purchase!'
};

const currentDate = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
};
const date = currentDate();

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to purchase product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnaddToCartBtn();
    homePage.clickOnLink('Cart');
    checkout.clickOnPlaceOrderBtn();
    checkout.typeName(testData.name);
    checkout.typeCoutry(testData.coutry);
    checkout.typeCity(testData.city);
    checkout.typeCreditCard(testData.creditCard);
    checkout.typeMonth(testData.month);
    checkout.typeYear(testData.year);
    checkout.clickOnPurchaseBtn();
    checkout.allert.should('contain', testData.successMessage);
    checkout.confirmation.should(
      'contain',
      'Id',
      'Amount',
      'Card Number',
      testData.creditCard,
      'Name',
      testData.name,
      'Date',
      date
    );
    checkout.clickOnOkBtn();
  });
});
