import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductDetailsPageObject from '../support/pages/productDetails.pageObject';
import ProductCartPageObject from '../support/pages/productCart.pageObject';
import PlaceOrderFormPageObject from '../support/pages/placeOrderForm.pageObject';
import faker from 'faker';
/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const productDetailsPage = new ProductDetailsPageObject();
const productCartPage = new ProductCartPageObject();
const placeOrderForm = new PlaceOrderFormPageObject();

const testData = {
  categoryName: 'Laptops',
  productName: 'Sony vaio i5',
  successMessage: 'Product added',
  orderForm : {
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    country: faker.address.country(),
    city: faker.address.city(),
    creditCard: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: Math.floor(2023 + Math.random() * 10)
  }
};


describe('Checkout process', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to add to cart product and to checkout product', () => {
    homePage.clickOnCategory(testData.categoryName);
    homePage.clickOnProduct(testData.productName);

    productDetailsPage.addToCartBtn
      .click();
    productDetailsPage.assertAllert(testData.successMessage);

    homePage.clickOnLink('Cart');
    productCartPage.assertProduct(testData.productName);
    productCartPage.placeOrderBtn
      .click();

    placeOrderForm.nameField
      .type(testData.orderForm.name, {force: true});
    placeOrderForm.countryField
      .type(testData.orderForm.country, { force: true });
    placeOrderForm.cityField
      .type(testData.orderForm.city);
    placeOrderForm.cardField
      .type(testData.orderForm.creditCard);
    placeOrderForm.monthField
      .type(testData.orderForm.month);
    placeOrderForm.yearField
      .type(testData.orderForm.year);
    placeOrderForm.purchaseBtn
      .click();
    
    placeOrderForm.assertCardNumber(testData.orderForm.creditCard);
    placeOrderForm.assertName(testData.orderForm.name);
    placeOrderForm.okBtn
      .click();
  });
});
