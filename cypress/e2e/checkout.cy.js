import { faker } from '@faker-js/faker';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future({ years: 5 }).getFullYear(),
  productName: 'Sony vaio i7',
  successMessage: 'Product added'
};

describe('Shopping Cart', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow a user to add a product to the cart', () => {
    homePage.clickOnLaptops();
    homePage.clickOnProduct(testData.productName);
    homePage.addToCart();

    // Assert the product was added
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains(testData.successMessage);
    });

    homePage.clickOnCart();
    cartPage.assertProductInCart(testData.productName);

    cartPage.clickOnPlaceOrder();
    cartPage.fillOrderDetails(
      testData.name,
      testData.country,
      testData.city,
      testData.creditCard,
      testData.month,
      testData.year
    );
    cartPage.clickOnPurchase();

    // Assert the modal shows the correct information
    cartPage.assertModalData(
      testData.name,
      testData.country,
      testData.city,
      testData.creditCard,
      testData.month,
      testData.year
    );
    cartPage.clickOnOk();
  });
});
