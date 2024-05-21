import CartPageObject from '../support/pages/cart.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import { faker } from '@faker-js/faker';
/// <reference types='cypress' />

const cartPage = new CartPageObject();
const homePage = new HomeAndCataloguePageObject();
const nameProduct = 'Samsung galaxy s6';
const btnName = 'Add to cart';
const linkName = 'Cart';

const testData = {
  name: faker.internet.userName(),
  password: faker.internet.password()
};

describe('', () => {
  before(() => {
    homePage.visit();
  });

  it('', () => {
    homePage.clickOnSignUpBtn();
    cy.wait(1000);
    homePage.typeSignInName(testData.name);
    homePage.typeSignInPassword(testData.password);
    homePage.clickOnSignUpAcceptBtn();
    homePage.clickOnLogInBtn();
    cy.wait(1000);
    homePage.typeLoginName(testData.name);
    homePage.typeLoginPassword(testData.password);
    homePage.clickOnLogInAcceptBtn();
    homePage.assertUsername(testData.name);
    homePage.clickOnProduct(nameProduct);
    homePage.clickOnAddToCartBtn(btnName);
    homePage.clickOnLink(linkName);
    cartPage.assertProductInCart(nameProduct);
  });
});
