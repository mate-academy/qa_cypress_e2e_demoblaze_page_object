import HomeAndCataloguePageObject from
  '../support/pages/homeСatalogue.pageObject';

import ProductPageObject from '../support/pages/product.pageObject';

import CartPageObject from '../support/pages/cart.pageObject';

import { faker } from '@faker-js/faker';

/// <reference types='cypress' />
const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

const testData = {
  category: 'Laptops',
  product: 'Sony vaio i7',
  message: 'Product added',
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardCVV(),
  month: faker.date.month(),
  year: faker.datatype.number({ min: 2024, max: 2027 })
};
describe('Demoblaze POM basics', () => {
  before(() => {
    homePage.visit();
  });

  it('Should be able to set the order', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    productPage.clickOnAddToCartButton();
    productPage.assertAllert(testData.message);
    homePage.clickOnLink('Cart');
    cartPage.findProductInCart(testData.product).should('exist');
    cartPage.clickOnPlaceOrderButton();
    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCreditCard(testData.creditCard);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);
    cartPage.clickOnPurchaseButton();
    cy.get('h2').should('contain', 'Thank you for your purchase!');
    cy.contains('p', `Card Number: ${testData.creditCard}`).should('exist');
    cy.get('p').should('contain', `Name: ${testData.name}`);
    cartPage.clickOnOkButton();
  });
});
