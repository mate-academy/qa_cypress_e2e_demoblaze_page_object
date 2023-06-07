import CheckoutPageObject from '../support/pages/checkout.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
/// <reference types="cypress" />

const checkout = new CheckoutPageObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: 2010,
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow to order product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    checkout.clickOnButton('Add to cart');
    checkout.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    checkout.assertProduct('Sony vaio i7');
    checkout.clickOnButton('Place Order');

    checkout.nameField.type(testData.name);
    checkout.countryField.type(testData.country);
    checkout.cityField.type(testData.city);
    checkout.cardField.type(testData.creditCard);
    checkout.monthField.type(testData.month);
    checkout.yearField.type(testData.year);

    checkout.clickOnButton('Purchase');
    checkout.assertSuccessfulOrder(testData.creditCard);
    checkout.assertSuccessfulOrder(testData.name);
  });
});
