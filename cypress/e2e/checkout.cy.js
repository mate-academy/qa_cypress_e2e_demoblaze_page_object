import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import PlaceOrderFormPageObject from '../support/pages/placeOrderForm.pageObject';
import ProductPageObject from '../support/pages/product.pageObject'; 
import CartPageObject from '../support/pages/cart.pageObject'

import faker from 'faker';
/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const placeOrderForm = new PlaceOrderFormPageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

const testData = {
  categoryName: 'Laptops',
  productName: 'Sony vaio i5',
  orderData : {
    name: faker.name.firstName(),
    country: faker.address.country(),
    city: faker.address.city(),
    creditcard: faker.finance.creditCardNumber(),
    month: 'June',
    year: 2023
  },
  successMessage: 'Product added'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to buy a product', () => {
    homePage.clickOnCategory(testData.categoryName);
    homePage.clickOnProduct(testData.productName);
    productPage.addToCartButton.click();
    productPage.assertAllert(testData.successMessage);

    homePage.clickOnLink('Cart');
    cartPage.assertProduct(testData.productName);
    cartPage.placeOrderButton.click();

    placeOrderForm.nameField.type(testData.orderData.name);
    placeOrderForm.countryField.type(testData.orderData.country);
    placeOrderForm.cityField.type(testData.orderData.city);
    placeOrderForm.creditCardField.type(testData.orderData.creditcard);
    placeOrderForm.monthField.type(testData.orderData.month);
    placeOrderForm.yearField.type(testData.orderData.year);
    placeOrderForm.purchaseButton.click();

    placeOrderForm.assertCardNumber(testData.orderData.creditcard);
    placeOrderForm.assertName(testData.orderData.name);
    placeOrderForm.OKButton.click();
  });
});
