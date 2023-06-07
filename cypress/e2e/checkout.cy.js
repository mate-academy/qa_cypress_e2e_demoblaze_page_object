import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CheckoutFormPageObject from '../support/pages/checkoutForm.pageObject';
import faker from 'faker';
/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const checkoutPage = new CheckoutFormPageObject();

const testData = {
  product: 'Sony vaio i7',
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: '4539622039401321',
  month: 11,
  year: 2026,
  successMessage: 'Product added',
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to purchase a product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    checkoutPage.clickOnAddToCartBtn();
    checkoutPage.assertAllert(testData.successMessage);

    homePage.clickOnLink('Cart');
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
