import CartPageObject from '../support/pages/cart.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import { faker } from '@faker-js/faker';
/// <reference types='cypress' />

const cartPage = new CartPageObject();
const homePage = new HomeAndCataloguePageObject();
const categoryLaptop = 'Laptops';
const nameLaptop = 'Sony vaio i7';
const alert = 'Product added';
const cart = 'Cart';

const testData = {
  name: faker.name.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.number.int({ min: 500, max: 1000 }),
  cardMonth: faker.date.anytime().getMonth(),
  cardYear: faker.date.anytime().getFullYear()
};

describe('', () => {
  before(() => {
    homePage.visit();
  });

  it('', () => {
    homePage.clickOnCategory(categoryLaptop);
    homePage.clickOnProduct(nameLaptop);
    homePage.clickOnAddToCartBtn();
    homePage.assertAllert(alert);
    homePage.clickOnLink(cart);
    cartPage.assertProductInCart(nameLaptop);
    cartPage.clickOnPlasceOrderBtn();
    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCard(testData.creditCard);
    cartPage.typeMounth(testData.cardMonth);
    cartPage.typeYear(testData.cardYear);
    cartPage.clickOnPurchase();
    cartPage.assertUserName(testData.name);
    cartPage.assertCardNumber(testData.creditCard);
    cartPage.clickOnOkBtn();
  });
});
