import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductInfoPageObject from '../support/pages/productPage.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import PlaceOrderFormPageObject from '../support/pages/placeOrderForm.pageObject';
import faker from 'faker';
/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const productInfo = new ProductInfoPageObject();
const productCart = new CartPageObject();
const placeOrderForm = new PlaceOrderFormPageObject();
const testData = {
  categoryName: 'Laptops',
  productName: 'Sony vaio i7',
  alertMessage: 'Product added',
  placeOrderData: {
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    country: faker.address.country(),
    city: faker.address.city(),
    creditCard: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.random.number({ min: 2023, max: 2033 })
  }
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to make purchase', () => {
    homePage.clickOnCategory(testData.categoryName);
    homePage.clickOnProduct(testData.productName);
    
    productInfo.addToCartBtn.click();
    productInfo.assertAllert(testData.alertMessage);
   
    homePage.clickOnLink('Cart');
    productCart.assertProduct(testData.productName);
    productCart.placeOrderBtn.click();
    placeOrderForm.nameField
      .type(testData.placeOrderData.name);
    placeOrderForm.countryField
      .type(testData.placeOrderData.country);
    placeOrderForm.cityField
      .type(testData.placeOrderData.city);
    placeOrderForm.cardField
      .type(testData.placeOrderData.creditCard);
    placeOrderForm.monthField
      .type(testData.placeOrderData.month);
    placeOrderForm.yearField
      .type(testData.placeOrderData.year);
    placeOrderForm.purchaseBtn.click();
    
    placeOrderForm.assertCardNumber(testData.placeOrderData.creditCard);
    placeOrderForm.assertName(testData.placeOrderData.name);
    placeOrderForm.okBtn.click();
  });
});
