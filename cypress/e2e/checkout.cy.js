// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cartPage.pageObject';
import { faker } from '@faker-js/faker';
/// <reference types='cypress' />
const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const testData = {
  category: 'Laptops',
  product: 'Sony vaio i7',
  message: 'Product added',
  name: faker.name.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.datatype.number({ min: 2024, max: 2040 })
};

describe('Purchase Test', () => {
  before(() => {
    homePage.visit();
  });
  it('should complete the purchase flow', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    productPage.clickOnAddToCartButton();
    productPage.assertAllert(testData.message);
    homePage.clickOnLink('Cart');
    cartPage.findProductInTheCart(testData.product).should('exist');
    cartPage.clickOnPlaceOrderButton();
    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCreditCard(testData.creditCard);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);
    cartPage.clickOnPurchaseButton();
    cy.contains('h2', 'Thank you for your purchase!').should('exist');
    cy.contains('p', `Name: ${testData.name}`).should('exist');
    cy.contains('p', `Card Number: ${testData.creditCard}`).should('exist');
    cartPage.clickOnOkButton();
  });
});
