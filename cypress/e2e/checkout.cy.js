/// <reference types='cypress' />

// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
const { faker } = require('@faker-js/faker');

const homePage = new HomeAndCataloguePageObject();

const orderData = {
  name: faker.person.firstName(),
  country: faker.location.county(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.number.int({ max: 12 }),
  year: faker.number.int({ min: 1940, max: 2023 })
};

const product = {
  laptopName: 'Sony vaio i7'
};

describe('Product store', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to buy ' + product.laptopName, () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(product.laptopName);
    cy.get('a[onclick="addToCart(9)"]')
      .click();
    cy.on('window:confirm', (alert) => {
      expect(alert).to.equal('Product added');
    });

    homePage.clickOnLink('Cart');
    cy.contains(product.laptopName)
      .should('be.visible');
    cy.get('button[class="btn btn-success"]')
      .click();

    cy.get('input[id="name"]')
      .type(orderData.name);
    cy.get('input[id="country"]')
      .type(orderData.country);
    cy.get('input[id="city"]')
      .type(orderData.city);
    cy.get('input[id="card"]')
      .type(orderData.creditCard);
    cy.get('input[id="month"]')
      .type(orderData.month);
    cy.get('input[id="year"]')
      .type(orderData.year);

    cy.get('#name')
      .should('have.value', orderData.name);
    cy.get('#country')
      .should('have.value', orderData.country);
    cy.get('#city')
      .should('have.value', orderData.city);
    cy.get('#card')
      .should('have.value', orderData.creditCard);
    cy.get('#month')
      .should('have.value', orderData.month);
    cy.get('#year')
      .should('have.value', orderData.year);

    cy.get('button[onclick="purchaseOrder()"]')
      .click();
    cy.contains('Thank you for your purchase!')
      .should('be.visible');
    cy.get('button[class="confirm btn btn-lg btn-primary"]')
      .click();
  });
});
