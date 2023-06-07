/// <reference types="cypress" />
import HomeCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import ProductInfoPageObject from '../support/pages/productInfo.pageObgect';
import CartPageObject from '../support/pages/cart.pageObject';
import PlaceOrderFormPageObject from '../support/pages/placeOrderForm.pageObject';
import faker from 'faker';

const homePage = new HomeCataloguePageObject();
const productInfo = new ProductInfoPageObject();
const productCart = new CartPageObject();
const placeOrderForm = new PlaceOrderFormPageObject();
const testData = {
  categoryName: 'Laptops',
  productName: 'Sony vaio i7',
  amount: '790',
  alertMessage: 'Product added',
  placeOrderData: {
    name: faker.name.firstName(),
    country: faker.address.country(),
    city: faker.address.city(),
    creditCard: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.date.past().getFullYear(),
  }
}

describe('Demoblaze', () => {
  before(() => {
  homePage.visit();
  });

  it('Buying Sony Vaio 17', () => {
   homePage.clickOnCategory(testData.categoryName);
   homePage.clickOnProduct(testData.productName);
   productInfo.addToCartBtn.click();
   productInfo.assertAllert(testData.alertMessage);
   homePage.clickOnLink('Cart');
   productCart.assertProduct(testData.productName);
   productCart.placeOrderBtn.click();
   placeOrderForm.nameField.type(testData.placeOrderData.name);
   placeOrderForm.countryField.type(testData.placeOrderData.country);
   placeOrderForm.cityField.type(testData.placeOrderData.city);
   placeOrderForm.cardField.type(testData.placeOrderData.creditCard);
   placeOrderForm.monthField.type(testData.placeOrderData.month);
   placeOrderForm.yearField.type(testData.placeOrderData.year);
   placeOrderForm.purchaseBtn.click();
   placeOrderForm.assertCardNumber(testData.placeOrderData.creditCard);
   placeOrderForm.assertName(testData.placeOrderData.name);
   placeOrderForm.assertAmount(testData.amount);
   placeOrderForm.okBtn.click();

  });
});
