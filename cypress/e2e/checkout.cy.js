/// <reference types="cypress" />
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';

import CartPageObject from '../support/pages/cart.PageObject';
import ProductPageObject
  from '../support/pages/product.pageObject';
import PlaceOrderFormPageObject
  from '../support/pages/placeOrderForm.pageObject';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();
const productPage = new ProductPageObject();
const placeOrderForm = new PlaceOrderFormPageObject();
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const testData = {
  name: `${firstName} ${lastName}`,
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: Math.floor(1900 + Math.random() * 123),
  categoryName: 'Laptops',
  productName: 'Sony vaio i7',
  firstName: `${firstName}`
};
describe('Demoblaze', () => {
  before(() => {
    cy.visit('/');
  });
  it('should allows user to place an order', () => {
    homePage.clickOnCategory(testData.categoryName);
    homePage.clickOnProduct(testData.productName);

    productPage.clickOnAddBtn();
    /* eslint-disable */
    cy.wait(1000);
    productPage.assertAllert('Product added');
    homePage.clickOnLink('Cart');

    cartPage.assertProductInCart(testData.productName);
    cartPage.clickPlaceOrderBtn();

    placeOrderForm.typeName(testData.firstName);
    placeOrderForm.typeCountry(testData.country);
    placeOrderForm.typeCity(testData.city);
    placeOrderForm.typeCreditCard(testData.creditCard);
    placeOrderForm.typeMonth(testData.month);
    placeOrderForm.typeYear(testData.year);
    placeOrderForm.clickPurchaseBtn();

    placeOrderForm.assertEnteredData(testData.firstName, testData.creditCard);
    placeOrderForm.clickOkBtn();
  });
});
