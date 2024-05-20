import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import CartPageObject
  from '../support/pages/cart.pageObject';
  const { faker } = require('@faker-js/faker');
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const userInfo = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.random.number({ min: 1950, max: 2010 })
};

describe('Checkout flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to checkout the product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');

    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.clickOnButton('Place Order');
    cartPage.typeName(userInfo.name);
    cartPage.typeCountry(userInfo.country);
    cartPage.typeCity(userInfo.city);
    cartPage.typeCard(userInfo.creditCard);
    cartPage.typeMonth(userInfo.month);
    cartPage.typeYear(userInfo.year);
    cartPage.clickOnButton('Purchase');
    cartPage.assertName(userInfo.name);
    cartPage.assertCardNumber(userInfo.creditCard);
    cartPage.clickOkButton();
  });
});
