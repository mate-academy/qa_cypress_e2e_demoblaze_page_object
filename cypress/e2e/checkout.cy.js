/// <reference types='cypress' />

import PageObject from "../support/PageObject";
import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import { ProductPage } from "../support/pages/product.pageObject";

const homePage = new HomeAndCataloguePageObject();
const pageObject = new PageObject();
const productPage = new ProductPage()
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
    productPage.clickOnAddToCartBtn();
    cy.wait(1000);

    pageObject.assertAllert('Product added');

    homePage.clickOnLink('Cart');

    productPage.assertProductInCart('Sony vaio i7');

    productPage.clickOnPlaceOrderBtn();
    productPage.getById('name', infoAboutUser.name);
    productPage.getById('country', infoAboutUser.country);
    productPage.getById('city', infoAboutUser.city);
    productPage.getById('card', infoAboutUser.creditCard);
    productPage.getById('month', infoAboutUser.month);
    productPage.getById('year', infoAboutUser.year);
    productPage.clickOnPurchaseBtn();

    productPage.assertDataAfterPurchase(infoAboutUser.name);
    productPage.assertDataAfterPurchase(infoAboutUser.creditCard);

    productPage.clickOnOkAfterPurchaseBtn();
  });
});
