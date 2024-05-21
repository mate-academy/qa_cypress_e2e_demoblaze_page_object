/// <reference types='cypress' />
const { faker } = require('@faker-js/faker');
import HomeCataloguePageObject from "../support/pages/homeCatalogue.pageObject";
import SignUpPagePageObject from "../support/pages/signUpPage.pageObject";
import ProductPagePageObject from "../support/pages/productPage.pageObject";
import LogInPagePageObject from "../support/pages/logInPage.pageObject";
import CartPagePageObject from "../support/pages/cartPage.pageObject";

const homePage = new HomeCataloguePageObject();
const productPage = new ProductPagePageObject();
const signUpPage = new SignUpPagePageObject();
const logInPage = new LogInPagePageObject();
const cartPage = new CartPagePageObject();

describe('User flow', () => {
  const user = {
    username: faker.internet.userName(),
    password: faker.internet.password()
  };

  const categoryName = 'Phones';
  const product = 'Samsung galaxy s6';

  before(() => {
    cy.visit('');
  });

  it('should allow to register a new user and login', () => {
    homePage.clickOnLink('Sign up');
    signUpPage.signUpUser(user);
    signUpPage.clickSignUpBtn();
    homePage.clickOnLink('Log in');
    logInPage.logInUser(user);
    logInPage.clickLogInBtn();
  });

  it('shoud add product to a cart', () => {
    cy.visit('');
    homePage.clickOnCategory(categoryName);
    homePage.clickOnProduct(product);
    productPage.clickOnAddToCartButton();
    productPage.assertProductAdded();
    homePage.clickOnLink('Cart');
    cartPage.assertProductInCart(product);
  });
});
