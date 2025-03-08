import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CheckoutPageObject from '../support/pages/checkout.pageObject';
const { faker } = require('@faker-js/faker');
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const checkout = new CheckoutPageObject();

const testData = {
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  card: '5168 4400 5576 4900',
  month: faker.date.month(),
  year: '2026',
  category: 'Laptops',
  product: 'Sony vaio i7',
  alertMessage: 'Product added'
};

describe('The user', () => {
  before(() => {

  });

  it('should be able to checkout product', () => {
    homePage.visit();
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert(testData.alertMessage);

    homePage.clickOnLink('Cart');
    checkout.wait();
    checkout.assertProductInTheCart(testData.product);

    checkout.clickOnPlaceOrderButton();
    checkout.typeName(testData.name);
    checkout.typeCountry(testData.country);
    checkout.typeCity(testData.city);
    checkout.typeCard(testData.card);
    checkout.typeMonth(testData.month);
    checkout.typeYear(testData.year);
    checkout.clickOnPurchaseButton();

    checkout.assertEnteredDataIsShown(testData.name, testData.card);
    checkout.clickOnOkButton();
    checkout.assertAlertIsNotVisible();
  });
});
