/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import { faker } from '@faker-js/faker';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const orderData = {
  name: faker.name.fullName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: '12',
  year: '2025'
};

describe('Complete purchase', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability complete purchase', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton('Add to cart');
    homePage.clickOnLink('Cart');
    homePage.verifyAlertMessage('Product added');
    homePage.clickOnLink('Cart');
    cy.url().should('include', '/cart.html');
    cartPage.verifyItemInCart('Sony vaio i7');
    cartPage.clickOnButton('Place Order');
    cartPage.verifyOrderModalVisible();
    cartPage.fillOrderForm(orderData);
    cartPage.clickOnButton('Purchase');
    cartPage.verifyConfirmationData(orderData);
    cartPage.clickOnButton('OK');
  });
});
