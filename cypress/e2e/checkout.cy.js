import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import CartpageObject from '../support/pages/cart.pageObject';
import { faker } from '@faker-js/faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartpageObject();

const testData = {
  firstName: faker.person.firstName(),
  country: 'USA',
  city: 'New York',
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: '2024'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to place an order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    homePage.addToCart();
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');

    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.clickOnPlaceOrder();

    cartPage.typeName(testData.firstName);
    cartPage.typeCountry(testData.conuntry);
    cartPage.typeCity(testData.city);
    cartPage.typeCreditCard(testData.card);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);

    cartPage.clickOnPurchase();
    cartPage.assertPopUpMessage();
    cartPage.clickOnOk();
  });
});
