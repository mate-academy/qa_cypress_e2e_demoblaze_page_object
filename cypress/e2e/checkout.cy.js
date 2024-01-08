/// <reference types='cypress' />

import PageObject from "../support/PageObject";
import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";

const homePage = new HomeAndCataloguePageObject();
const pageObject = new PageObject();
const faker = require("faker");

const infoAboutUser = {
  name: faker.name.firstName() + faker.name.lastName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: '9876123456789456',
  month: faker.date.month(),
  year: '1990'
}

describe('Demoblaze', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to add item to the cart and buy it', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.buttonAddToCart();

    pageObject.assertAllert('Product added');

    homePage.clickOnLink('Cart');

    homePage.assertProductInCart('Sony vaio i7');

    homePage.buttonPlaceOrder();
    homePage.getById('name', infoAboutUser.name);
    homePage.getById('country', infoAboutUser.country);
    homePage.getById('city', infoAboutUser.city);
    homePage.getById('card', infoAboutUser.creditCard);
    homePage.getById('month', infoAboutUser.month);
    homePage.getById('year', infoAboutUser.year);
    homePage.buttonPurchase();

    homePage.assertDataAfterPurchase(infoAboutUser.name);
    homePage.assertDataAfterPurchase(infoAboutUser.creditCard);

    homePage.buttonOkAfterPurchase();
  });
});
