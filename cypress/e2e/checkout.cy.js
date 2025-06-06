/* eslint-disable max-len */
/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class HomeAndCataloguePageObject {
  url = '/index.html';

  visit() {
    cy.visit(this.url);
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName).click();
  }

  clickOnProduct(productName) {
    cy.contains('.hrefch', productName).click();
  }

  assertAlert(text) {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include(text);
    });
  }
}

class ProductPageObject {
  get addToCartBtn() {
    return cy.contains('Add to cart');
  }

  clickOnAddToCartBtn() {
    this.addToCartBtn.click();
  }
}

class CartCheckoutPageObject {
  clickOnPlaceOrderBtn() {
    cy.contains('Place Order').should('be.visible').and('not.be.disabled').click();
    cy.get('#orderModal', { timeout: 10000 }).should('be.visible');
  }

  fillForm({ name, country, city, card, month, year }) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  clickOnPurchaseBtn() {
    cy.contains('Purchase').click();
  }

  assertModalContains({ name, card }) {
    cy.get('.sweet-alert')
      .invoke('text')
      .should('include', name);

    cy.get('.sweet-alert')
      .invoke('text')
      .should('include', card);
  }

  clickOnOkBtn() {
    cy.contains('OK').click();
  }

  assertProductInCart(productName) {
    cy.get('.success td:nth-child(2)', { timeout: 6000 }).should('contain', productName);
  }
}

const productName = 'Sony vaio i7';
const testData = {
  name: faker.name.fullName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: '12',
  year: '2025'
};

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartCheckoutPageObject();

describe('E2E Checkout flow with Page Object logic inline', () => {
  it('should successfully purchase a product', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(productName);

    productPage.clickOnAddToCartBtn();
    homePage.assertAlert('Product added');

    homePage.clickOnLink('Cart');
    cartPage.assertProductInCart(productName);

    cartPage.clickOnPlaceOrderBtn();
    cartPage.fillForm(testData);
    cartPage.clickOnPurchaseBtn();
    cartPage.assertModalContains(testData);
    cartPage.clickOnOkBtn();
  });
});
