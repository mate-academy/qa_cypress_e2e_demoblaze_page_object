/// <reference types='cypress' />

import HomeAndCataloguePageObject from
  '../support/pages/homeCatalogue.pageObject';

import CartPagePageObject from
  '../support/pages/cart/cartPage.pageObject';

import CartModalPageObject from
  '../support/pages/cart/cartModal.pageObject';

const { faker } = require('@faker-js/faker');

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPagePageObject();
const cartModal = new CartModalPageObject();

const testData = {
  categoryName: 'Laptops',
  productName: 'Sony vaio i7',
  userName: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.number.int({ min: 2024, max: 2040 })
};

describe('checkout flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should buy an item', () => {
    homePage.clickOnCategory(testData.categoryName);
    homePage.clickOnProduct(testData.productName);
    homePage.clickOnBtn('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');

    // cy.wait(1500);

    cartPage.assertProductAdded(testData.productName);
    cartPage.clickOnBtn('Place Order');

    // cy.wait(500);

    cartModal.typeName(testData.userName);
    cartModal.typeCountry(testData.country);
    cartModal.typeCity(testData.city);
    cartModal.typeCard(testData.creditCard);
    cartModal.typeMonth(testData.month);
    cartModal.typeYear(testData.year);

    cartModal.clickOnBtn('Purchase');

    cy.get('h2')
      .should('contain', 'Thank you for your purchase!');

    cy.get('p')
      .should('contain', `Card Number: ${testData.creditCard}`);

    cy.get('p')
      .should('contain', `Name: ${testData.userName}`);

    cartModal.clickOnBtn('OK');
  });
});
