/* eslint-disable max-len */
import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import PlaceOrderModalPageObject from '../support/pages/placeOrderModal.pageObject';
import { faker } from '@faker-js/faker';

/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const orderModal = new PlaceOrderModalPageObject();

describe('Checkout Flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should add a laptop to cart and complete purchase', () => {
    homePage.clickOnCategory('Laptops');
    productPage.selectProduct('Sony vaio i7');

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.eq('Product added');
    });

    productPage.clickAddToCart();

    cy.contains('.nav-link', 'Cart').click();

    cartPage.verifyProductInCart('Sony vaio i7');
    cartPage.clickPlaceOrder();

    const orderData = {
      name: faker.person.firstName(),
      country: faker.location.country(),
      city: faker.location.city(),
      creditCard: faker.finance.creditCardNumber(),
      month: '12',
      year: '2025'
    };

    orderModal.fillOrderForm(orderData);
    orderModal.clickPurchase();

    const normalizedCard = orderData.creditCard.replace(/\D/g, '');

    cy.get('.sweet-alert')
      .should('contain.text', orderData.name)
      .and('contain.text', normalizedCard);

    cy.get('.sa-confirm-button-container button').click();
  });
});
