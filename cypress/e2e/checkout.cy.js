import HeaderNav from '../support/pages/headerNav.pageObject';
import signUpGen from '../support/generation';
import SignUp from '../support/pages/signupForm.pageObject';
import LogIn from '../support/pages/loginForm.pageObject';
/// <reference types='cypress' />

const headerNav = new HeaderNav();
const signUp = new SignUp();
const logIn = new LogIn();
const user = signUpGen;

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

    // cy.wait(1000);

    signUp.assertAllert('Sign up successful.');
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

    logIn.assertAllert('Sign up successful.');
  });
});
