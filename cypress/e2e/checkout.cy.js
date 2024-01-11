/// <reference types='cypress' />

import HomeAndCataloguePageObject from
  '../support/pages/homeСatalogue.pageObject';
import OrderFormPageObject from '../support/pages/orderForm.pageObject';
import CartPagePageObject from '../support/pages/cartPage.pageObject';

const homePage = new HomeAndCataloguePageObject();
const orderForm = new OrderFormPageObject();
const cartPage = new CartPagePageObject();

const laptop = 'Sony vaio i7';
let user;

describe('Demoblaze app', () => {
  before(() => {
    homePage.visit();
    cy.viewport(1050, 850);
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should provide the ability to order product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(laptop);
    homePage.clickOnAddToCartBtn();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(300);
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added`);
    });

    homePage.clickOnCart();

    cartPage.assertLaptop();

    cartPage.clickPlaceOrderBtn();

    orderForm.typeName(user.name);
    orderForm.typeCountry(user.country);
    orderForm.typeCity(user.city);
    orderForm.typeCard(user.creditCard);
    orderForm.typeMonth(user.month);
    orderForm.typeYear(user.year);
    orderForm.clickPurchaseBtn();

    orderForm.assertSuccess();
  });
});
