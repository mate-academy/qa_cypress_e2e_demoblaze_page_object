/// <reference types='cypress' />

// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CartPageObject from '../support/pages/cartPage.pageObject';
import CartFormObject from '../support/pages/cartForm.pageObject';
const { faker } = require('@faker-js/faker');

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();
const cartForm = new CartFormObject();

const orderData = {
  name: faker.person.firstName(),
  country: faker.location.county(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.number.int({ max: 12 }),
  year: faker.number.int({ min: 1940, max: 2023 })
};

const product = {
  laptopName: 'Sony vaio i7'
};

describe('Product store', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to buy a product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(product.laptopName);
    homePage.clickOnAddToCartButton();
    homePage.clickOnLink('Cart');
    cy.contains(product.laptopName).should('be.visible');
    cartPage.clickOnPurchaseButton();
    cartForm.typeName(orderData.name);
    cartForm.typeCountry(orderData.country);
    cartForm.typeCity(orderData.city);
    cartForm.typeCard(orderData.creditCard);
    cartForm.typeMonth(orderData.month);
    cartForm.typeYear(orderData.year);
    cartForm.checkName(orderData.name);
    cartForm.checkCountry(orderData.country);
    cartForm.checkCity(orderData.city);
    cartForm.checkCard(orderData.creditCard);
    cartForm.checkMonth(orderData.month);
    cartForm.checkYear(orderData.year);
    cartForm.clickOnPurchaseButton();
    cy.contains('Thank you for your purchase!').should('be.visible');
    cartPage.clickOnPurchaseButton();
  });
});
