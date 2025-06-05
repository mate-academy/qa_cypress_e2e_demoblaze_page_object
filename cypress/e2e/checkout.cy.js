/// <reference types='cypress' />

import { faker } from '@faker-js/faker';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import PlaceOrderFormPageObject
  from '../support/pages/placeOrderForm.pageObject';

const testData = {
  name: faker.person.fullName(),
  county: faker.location.country(),
  city: faker.location.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.number.int({ min: 1, max: 12 }),
  year: 2025
};

const contactForm = new ContactFormPageObject();
const homePage = new HomeAndCataloguePageObject();
const placeOrder = new PlaceOrderFormPageObject();

describe('Placing an order for a product', () => {
  const product = 'Sony vaio i7';
  before(() => {
    homePage.visit('/');
  });

  it(
    'The user can select a laptop, add it' +
      'to the cart and successfully place an order',
    () => {
      homePage.clickOnCategory('Laptops');
      homePage.clickOnProduct(product);
      cy.contains('a', 'Add to cart').click();
      contactForm.assertAllert('Product added');

      homePage.clickOnLink('Cart');
      cy.contains('td', product).should('be.visible');
      cy.contains('button', 'Place Order').click();

      placeOrder.typeName(testData.name);
      placeOrder.typeCounty(testData.county);
      placeOrder.typeCity(testData.city);
      placeOrder.typeCard(testData.card);
      placeOrder.typeMonth(testData.month);
      placeOrder.typeYear(testData.year);
      placeOrder.clickOnPurchaseBtn();
      placeOrder.confirmationMessage();

      cy.contains('button[class="confirm btn btn-lg btn-primary"]', 'OK')
        .should('be.visible')
        .click();
    }
  );
});
