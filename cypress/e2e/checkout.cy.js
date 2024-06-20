/// <reference types='cypress' />

import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import CheckoutFormPageObject from "../support/pages/checkoutForm.pageObject";

const faker = require('faker');
const homeCatalogue = new HomeAndCataloguePageObject();
const checkoutForm = new CheckoutFormPageObject();

const customer = {
  name: faker.name.firstName(),
  country: 'USA',
  city: 'Boston',
  cardNumber: faker.phone.phoneNumber('################'),
  month: '8',
  year: '2024'
};

describe('e2e Checkout', () => {
  before(() => {
    homeCatalogue.visit();
  });

  it('should provide the ability to place an order', () => {
    homeCatalogue.clickOnLaptopsBtn();
    homeCatalogue.clickOnProduct();
    homeCatalogue.clickOnAddToCartBtn();
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq('Product added');
    });

    homeCatalogue.clickOnCartBtn();
    homeCatalogue.productInCart.should('be.visible');

    homeCatalogue.clickOnPlaceOrderBtn();
    //fill the form
    checkoutForm.typeName(customer.name);
    checkoutForm.typeCountry(customer.country);
    checkoutForm.typeCity(customer.city);
    checkoutForm.typeCreditCard(customer.cardNumber);
    checkoutForm.typeMonth(customer.month);
    checkoutForm.typeYear(customer.year);

    checkoutForm.clickOnPurchaseBtn();
    cy.get('.lead')
      .should('contain', customer.cardNumber)
      .should('contain', customer.name);

    checkoutForm.clickOnOkBtn();

  });
});
