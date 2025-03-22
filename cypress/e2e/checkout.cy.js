/// <reference types='cypress' />
import { faker } from '@faker-js/faker';
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import CheckoutPageObject from '../support/pages/checkout.pageObject';

describe('checkout', () => {
  const homePage = new HomeAndCataloguePageObject();
  const checkoutPage = new CheckoutPageObject();
  const testData = {
    category: 'Laptops',
    product: 'Sony vaio i7',
    addToCartBtn: 'Add to cart',
    alertMessage: 'Product added',
    cartLink: 'Cart',
    confirmBtn: 'OK',
    name: faker.person.fullName(),
    country: faker.location.country(),
    city: faker.location.city(),
    card: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.date.future().getFullYear()
  };

  before(() => {
    homePage.visit();
  });

  it('should be able to checkout product', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    homePage.clickOnButton(testData.addToCartBtn);
    homePage.assertAlert(testData.alertMessage);

    homePage.clickOnLink(testData.cartLink);
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
