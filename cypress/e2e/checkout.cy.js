/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CheckoutPageObject from '../support/pages/checkout.pageObject';
import { faker } from '@faker-js/faker';
const checkoutPage = new CheckoutPageObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  category: 'Laptops',
  product: 'Sony vaio i7',
  button: 'Add to cart',
  allert: 'Product added',
  link: 'Cart',
  orderButton: 'Place Order',
  name: faker.person.fullName(),
  country: faker.location.country(),
  city: faker.location.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear(),
  btn: 'Purchase',
  confirmBtn: 'OK'
};

describe('checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should be able to checkout product', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert(testData.alertMessage);

    homePage.clickOnLink('Cart');
    checkoutPage.assertProductInTheCart(testData.product);

    checkoutPage.clickOnPlaceOrderButton();
    checkoutPage.typeName(testData.name);
    checkoutPage.typeCountry(testData.country);
    checkoutPage.typeCity(testData.city);
    checkoutPage.typeCard(testData.card);
    checkoutPage.typeMonth(testData.month);
    checkoutPage.typeYear(testData.year);
    checkoutPage.clickOnPurchaseButton();

    checkoutPage.assertEnteredDataIsShown(testData.name, testData.card);
    checkoutPage.clickOnOkButton();
    checkoutPage.assertAlertIsNotVisible();
  });
});
