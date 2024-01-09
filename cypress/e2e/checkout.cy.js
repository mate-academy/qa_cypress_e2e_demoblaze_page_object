/// <reference types='cypress' />

import PageObject from "../support/PageObject";
import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import { ProductPage } from "../support/pages/product.pageObject";
import { CartPage } from "../support/pages/cart.pageObject";

const homePage = new HomeAndCataloguePageObject();
const pageObject = new PageObject();
const productPage = new ProductPage()
const cartPage = new CartPage();
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

    cartPage.assertProductInCart('Sony vaio i7');

    cartPage.clickOnPlaceOrderBtn();
    cartPage.getById('name', infoAboutUser.name);
    cartPage.getById('country', infoAboutUser.country);
    cartPage.getById('city', infoAboutUser.city);
    cartPage.getById('card', infoAboutUser.creditCard);
    cartPage.getById('month', infoAboutUser.month);
    cartPage.getById('year', infoAboutUser.year);
    cartPage.clickOnPurchaseBtn();

    cartPage.assertDataAfterPurchase(infoAboutUser.name);
    cartPage.assertDataAfterPurchase(infoAboutUser.creditCard);

    cartPage.clickOnOkAfterPurchaseBtn();
  });
});
