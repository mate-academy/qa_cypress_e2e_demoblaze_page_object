/// <reference types='cypress' />

import checkoutPageObject from "../support/pages/checkout.pageObject";
import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import categoryPageObject from "../support/pages/category.pageObject";
import faker from "faker";

const checkoutPage = new checkoutPageObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditcard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear().toString(),
};

describe('', () => {
  before(() => {
cy.visit('/');
  });

  it('should be able to checkout', () => {
   homePage.clickOnCategory('Laptops');
    cy.contains('[href="prod.html?idp_=9"]', 'Sony vaio i7')
      .eq(0)
      .click();
    cy.contains('[href="#"]', 'Add to cart')
      .click();
    checkoutPage.visit();
    cy.get('.btn.btn-success')
      .click();
    checkoutPage.nameField
      .type(testData.name);
      checkoutPage.countryField
      .type(testData.country);
      checkoutPage.cityField
      .type(testData.city);
      checkoutPage.creditCardField
      .type(testData.creditcard)
      checkoutPage.monthField
      .type(testData.month);
    checkoutPage.yearField
      .type(testData.year);
    cy.contains('.btn','Purchase')
      .click();
    cy.get('.confirm.btn').click();
    cy.on('window:confirm', (alertText) => {
        expect(alertText)
        .to.equal(testData.creditcard)
        .to.equal(testData.name)
        .to.equal(testData.month)
        .to.equal(testData.year);
      });
      
  });
});
