import faker from 'faker';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CheckoutFormPageObject from '../support/pages/checkoutForm.pageObject';
/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const checkoutPage = new CheckoutFormPageObject();
const testData = {
  categoryName: 'Laptops',
  productName: 'Sony vaio i7',
  name: faker.name.firstName() + '' + faker.name.lastName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear(),
  successMessage: 'Product added',
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow to buy the product', () => {
    homePage.clickOnCategory(testData.categoryName);
    homePage.clickOnProduct(testData.productName);

    checkoutPage.clickOnAddToCartBtn();
    checkoutPage.assertAllert(testData.successMessage);

    homePage.clickOnLink('Cart');
    checkoutPage.assertProductInCart(testData.productName);

    checkoutPage.clickOnThePlaceOrderBtn();
    checkoutPage.nameField.type(testData.name);
    checkoutPage.countryField.type(testData.country);
    checkoutPage.cityField.type(testData.city);
    checkoutPage.creditCardField.type(testData.creditCard);
    checkoutPage.monthField.type(testData.month);
    checkoutPage.yearField.type(testData.year);
    checkoutPage.clickOnThePurchaseBtn();

    checkoutPage.assertSuccessModal(testData.name);
    checkoutPage.assertSuccessModal(testData.creditCard);

    checkoutPage.clickOnOkBtn();
  });
});
