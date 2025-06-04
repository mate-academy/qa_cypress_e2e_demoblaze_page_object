/// <reference types='cypress' />

// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import { faker } from '@faker-js/faker';
import CartPageObject from '../support/pages/cart.pageObject';
import CheckoutPageObject from '../support/pages/checkout.pageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const checkoutPage = new CheckoutPageObject();

const testData = {
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  // eslint-disable-next-line comma-dangle
  year: faker.date.future().getFullYear(),
};

describe('Purchase Flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should complete purchase process successfully', () => {
    homePage.clickOnCategory('Laptops');
    productPage.selectProduct('Sony vaio i7');
    productPage.addToCart();

    // Assert alert message and wait for it to close
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Product added.');
    });

    homePage.navigateToCart();
    cartPage.assertProductInCart('Sony vaio i7');

    // Wait for the alert to close by ensuring the cart link is visible/clickable
    cy.contains('Place Order').click();
    cy.get('#orderModal').should('be.visible');
    cy.get('#orderModal')
      .invoke('css', 'display')
      .then((display) => {
        cy.log(`Modal display state: ${display}`);
      });

    checkoutPage.fillOrderForm(testData);
    checkoutPage.submitPurchase();

    // 🔹 Assert order details in modal
    checkoutPage.assertPurchaseDetails(testData);

    checkoutPage.confirmOrder();
  });
});
