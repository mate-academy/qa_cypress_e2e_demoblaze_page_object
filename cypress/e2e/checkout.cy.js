import CartPageObject from '../support/pages/cart.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
const faker = require('faker');
/// <reference types='cypress' />

const cartPage = new CartPageObject();
const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();

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

    homePage.clickOnCategory('Laptop');

    productPage.clickOnProduct('Sony vaio i7');

    productPage.clickOnButton('Add to cart');

    productPage.assertAlertMessage('Product added');

    productPage.clickOnLink('Cart');

    cartPage.assertProductName('Sony vaio i7');

    cartPage.clickOnButton('Place Order');

    cartPage.typeName(generateCustomer.name);
    cartPage.typeCountry(generateCustomer.country);
    cartPage.typeCity(generateCustomer.city);
    cartPage.typeCard(generateCustomer.card);
    cartPage.typeMonth(generateCustomer.month);
    cartPage.typeYear(generateCustomer.year);

    cartPage.clickOnButton('Purchase');

    cartPage.assertMessage(generateCustomer.message);
    cartPage.assertCreditCard(generateCustomer.card);
    cartPage.assertName(generateCustomer.name);
    cartPage.clickOnButton('OK');
    cartPage.assertEmptyCart();
  });
});
