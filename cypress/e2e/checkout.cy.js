import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPagePageObject from '../support/pages/productPage.pageObject';
import CartPageObject from '../support/pages/cartPage.pageObject';
import faker from 'faker';

/// <reference types='cypress' />

const productPage = new ProductPagePageObject();
const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.image.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.month()
};

describe('Contact form', () => {
  before(() => {
    homePage.visit();
  });

  it(' should provide an ability to purchase an item', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    productPage.clickOnAddToCart();
    productPage.assertAllert('Product added');
    productPage.clickOnCart();

    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.clickPlaceOrder();

    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCreditCard(testData.creditCard);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);
    cartPage.clickPurchaseButton();

    cartPage.assertName(testData.name);
    cartPage.clickConfirmOrder();
  });
});
