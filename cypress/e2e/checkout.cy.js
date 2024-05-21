import HeaderNav from '../support/pages/headerNav.pageObject';
import signUpGen from '../support/generation';
import SignUp from '../support/pages/signupForm.pageObject';
import LogIn from '../support/pages/loginForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPage
  from '../support/pages/productPage.pageObject';
import CartPage from '../support/pages/cartPage.pageObject';
/// <reference types='cypress' />

const headerNav = new HeaderNav();
const signUp = new SignUp();
const logIn = new LogIn();
const user = signUpGen;
const homePageObject = new HomeAndCataloguePageObject();
const productPage = new ProductPage();
const cartObject = new CartPage();

const product = 'Samsung galaxy s6';
const productAddSuccessfulMsg = 'Product added.';
const signUpSuccessfulMsg = 'Sign up successful.';

describe('', () => {
  beforeEach(() => {
    headerNav.visit();
  });

  it(`should sign up`, () => {
    headerNav.clickOnLink('Sign up');

    signUp.usernameField.type(user.username);
    signUp.usernameField.clear();
    signUp.usernameField.type(user.username);

    signUp.passwordField.type(user.password);
    signUp.passwordField.clear();
    signUp.passwordField.type(user.password);

    signUp.confirmBtn.click();

    // eslint-disable-next-line
    cy.wait(1000);

    signUp.assertAllert(signUpSuccessfulMsg);
  });

  it(`should log in`, () => {
    headerNav.clickOnLink('Log in');

    logIn.usernameField.type(user.username);
    logIn.usernameField.clear();
    logIn.usernameField.type(user.username);

    logIn.passwordField.type(user.password);
    logIn.passwordField.clear();
    logIn.passwordField.type(user.password);

    logIn.confirmBtn.click();

    logIn.confirmation(user.username);
  });

  it('should add product to the cart', () => {
    cy.login();

    homePageObject.clickOnProduct(product);
    productPage.clickOnAddBtn();
    productPage.assertAllert(productAddSuccessfulMsg);

    homePageObject.clickOnLink('Cart');

    cartObject.productsList.should('contain', product);
    cartObject.deleteBtn.click();
  });
});
