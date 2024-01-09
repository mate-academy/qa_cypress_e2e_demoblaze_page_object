import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import PageObject from '../support/PageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import faker from 'faker';

/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const alert = new PageObject();
const cart = new CartPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear()
};

describe('Demoblaze (POM basics)', () => {
  before(() => {
    homePage.visit();
  });

  it('should automate flow using POM', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    cart.clickOnBTNaddToCart('Add to cart');
    alert.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cart.productIsInTheCart('Sony vaio i7');
    cart.clickOnPlaceOrder('Place Order');
    cart.nameField(testData.name, { force: true });
    cart.countryField(testData.country, { force: true });
    cart.cityField(testData.city, { force: true });
    cart.creditCardField(testData.card, { force: true });
    cart.monthField(testData.month, { force: true });
    cart.yearField(testData.year, { force: true });
    cart.clickOnPurchase('Purchase');
    cart.enteredDataSsShownOnModal(testData.card, testData.name);
    cart.clickOnOk('OK');
  });
});
