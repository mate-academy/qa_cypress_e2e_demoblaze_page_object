/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPage from '../support/pages/productPage.pageObject';
import CartPage from '../support/pages/cartPage.pageObject';

const { faker } = require('@faker-js/faker');

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPage();
const cartPage = new CartPage();

const testData = {
  name: faker.person.fullName(),
  cardNumber: faker.finance.creditCardNumber('############')
};

describe('', () => {
  before(() => {

  });

  it('should allow adding items to cart and purchasing them', () => {
    homePage.visit();
    homePage.clickOnProduct('Sony vaio i7 ');
    productPage.addToCart();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added`);
    });
    productPage.clickOnLink('Cart');
    cartPage.checkCartItem('Sony vaio i7');
    cartPage.placeOrder();
    // only filling that data since other data is not used or displayed on modal
    cartPage.checkout(testData.name, testData.cardNumber);
  });
});
