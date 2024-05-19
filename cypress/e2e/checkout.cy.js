/// <reference types='cypress' />
import { homePage } from '../support/pagesMS/HomePage';
import { productPage } from '../support/pagesMS/ProductPage';
import { cartPage } from '../support/pagesMS/CartPage';
import { orderPage } from '../support/pagesMS/OrderPage';

describe('', () => {
  let user;
  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('', () => {
    homePage.visitHomePage();

    homePage.clickProductPage();

    homePage.clickProductLink();

    productPage.clickAddToCart();

    productPage.assertMassage();

    productPage.clickOnCartLink();

    cartPage.assertAddedProduct();

    cartPage.clickOnThePlaceOrderBtn();

    orderPage.fillingOrderDatailsFild(user);

    orderPage.clickPurchaseBtn();

    orderPage.assertrOderDatails(user);

    orderPage.clickConfirmbtn();
  });
});
