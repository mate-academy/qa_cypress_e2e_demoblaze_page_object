/// <reference types="cypress" />
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CheckoutPageObject from '../support/pages/Checkout.pageObject';
import faker from 'faker';

const homeCatalogue = new HomeAndCataloguePageObject();
const checkoutPage = new CheckoutPageObject();

const testData = {
  product: 'Sony vaio i7',
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: 2023,
  successMessage: 'Product added',
};

describe('Checkout', () => {
  before(() => {
    homeCatalogue.visit();
  });

  it('should give an ability to buy a product', () => {
    homeCatalogue.clickOnCategory('Laptops');
    homeCatalogue.clickOnProduct('Sony vaio i7');
    checkoutPage.clickOnAddToCartBtn();
    checkoutPage.assertAllert(testData.successMessage);
    homeCatalogue.clickOnLink('Cart');
    checkoutPage.assertProductInCart(testData.product);
    checkoutPage.clickOnPlaceOrderBtn();
    checkoutPage.nameField.type(testData.name);
    checkoutPage.countryField.type(testData.country);
    checkoutPage.cityField.type(testData.city);
    checkoutPage.creditCardField.type(testData.creditCard);
    checkoutPage.monthField.type(testData.month);
    checkoutPage.yearField.type(testData.year);
    checkoutPage.clickOnPurchaseBtn();
    checkoutPage.assertSuccessModal(testData.creditCard);
    checkoutPage.assertSuccessModal(testData.name);
    checkoutPage.clickOnModalOkBtn();
  });
});
