import PageObject from '../support/PageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';

const faker = require('faker');

const homePage = new HomeAndCataloguePageObject();
const pageObject = new PageObject();

const userInfo = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: Math.floor(Math.random() * 9e15),
  month: faker.date.month(),
  year: faker.random.number({ min: 1950, max: 2010 })
};

describe('home page test', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to add product to the cart and buy it', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnAddToCartButton();
    pageObject.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    homePage.assertItemInCart('Sony vaio i7');
    homePage.clickOnButtonPlaceOrder();
    homePage.findFieldById('name', userInfo.name);
    homePage.findFieldById('country', userInfo.country);
    homePage.findFieldById('city', userInfo.city);
    homePage.findFieldById('card', userInfo.creditCard);
    homePage.findFieldById('month', userInfo.month);
    homePage.findFieldById('year', userInfo.year);
    homePage.clickOnPurchaseButton();
    homePage.assertDataAfterPurchase(userInfo.name);
    homePage.assertDataAfterPurchase(userInfo.creditCard);
    homePage.clickOnOkAfterPurchase();
  });
});
