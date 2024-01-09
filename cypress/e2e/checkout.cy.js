import CheckoutPageObject from '../support/pages/checkout.pageObject';
const faker = require('faker');
/// <reference types='cypress' />

const checkout = new CheckoutPageObject();

const generateCustomer = {
  // eslint-disable-next-line max-len
  name: faker.name.findName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber('visa'),
  month: faker.date.month(),
  year: Math.floor(Math.random() * (2025 - 2022) + 2022),
  message: 'Thank you for your purchase!'
};

describe('Demoblaze store', () => {
  before(() => {

  });

  it('adding to cart Sony vaio i7 and buy it', () => {
    cy.visit('');

    checkout.clickOnCategory('Laptop');

    checkout.clickOnProduct('Sony vaio i7');

    checkout.clickOnButton('Add to cart');

    checkout.assertAlertMessage('Product added');

    checkout.clickOnLink('Cart');

    checkout.assertProductName('Sony vaio i7');

    checkout.clickOnButton('Place Order');

    checkout.typeName(generateCustomer.name);
    checkout.typeCountry(generateCustomer.country);
    checkout.typeCity(generateCustomer.city);
    checkout.typeCard(generateCustomer.card);
    checkout.typeMonth(generateCustomer.month);
    checkout.typeYear(generateCustomer.year);

    checkout.clickOnButton('Purchase');

    checkout.assertMessage(generateCustomer.message);
    checkout.assertCreditCard(generateCustomer.card);
    checkout.assertName(generateCustomer.name);
    checkout.clickOnButton('OK');
    checkout.assertEmptyCart();
  });
});
