/* eslint-disable cypress/no-unnecessary-waiting */
import HomeAndCataloguePageObject from
  '../support/pages/homeСatalogue.pageObject';
import ProductPagePageObject from '../support/pages/productPage.pageObject';
import CartPagePageObject from '../support/pages/cartPage.pageObject';
import { faker } from '@faker-js/faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPagePageObject();
const cartPage = new CartPagePageObject();

const checoutData = {
  randomName: faker.company.name(),
  randomCountry: faker.location.country(),
  randomCity: faker.location.city(),
  randomCrediCard: faker.finance.creditCardNumber(),
  randomMonth: faker.date.month(),
  randomYear: faker.number.int({ min: 2017, max: 2024 })
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to checkout', () => {
    homePage.clickOnCategory('Laptops');

    homePage.clickOnProduct('Sony vaio i7');

    productPage.clickOnAddToCartButton();

    cy.wait(500);

    productPage.assertAllert('Product added');

    productPage.clickOnCartLink();

    cy.wait(500);

    cartPage.clickOnPlaceOrderButton();

    cartPage.typeInNameField(checoutData.randomName);

    cartPage.typeInCountryField(checoutData.randomCountry);

    cartPage.typeInCytiField(checoutData.randomCity);

    cartPage.typeInCreditCartField(checoutData.randomCrediCard);

    cartPage.typeInMonthField(checoutData.randomMonth);

    cartPage.typeInYearField(checoutData.randomYear);

    cartPage.clickOnPurchaseButton();

    cartPage.assertPurchaseSuccess();
  });
});
