
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CheckoutFormPageObject from '../support/pages/checkoutForm.pageObject';
import faker from 'faker';
/// <reference types="cypress" />


const homePage = new HomeAndCataloguePageObject();
const checkoutPage = new CheckoutFormPageObject();

const testData = {
  category: 'Laptops',
  product: 'Sony vaio i7',
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.datatype.number({ min: 2023, max: 2030 }),
  successMessage: 'Product added',
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide ability to purchase product', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
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

