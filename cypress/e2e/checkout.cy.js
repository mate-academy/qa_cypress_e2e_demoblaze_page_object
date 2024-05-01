/// <reference types='cypress' />
import { faker } from '@faker-js/faker';
import PageObject from '../support/PageObject';
import HomePageObject from '../support/pages/home.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';

const pageObject = new PageObject();
const homePage = new HomePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

const testData = {
  name: faker.person.fullName(),
  country: faker.location.country(),
  city: faker.location.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: '2024'
};

describe('Home page', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to place an order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.clickOnAddToCardBtn();
    pageObject.assertAllert('Product added');
    productPage.clickOnLink('Cart');
    cartPage.assertProduct('Sony vaio i7');
    cartPage.clickOnPlaceOrderBtn();
    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCard(testData.card);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);
    cartPage.clickOnPurchaseBtn();
    cartPage.assertDataInModal(testData.name);
    cartPage.assertDataInModal(testData.card);
    cartPage.clickOnOkBtn();
  });
});
