import PageObject from '../PageObject';

class SignUp extends PageObject {
  get usernameField() {
    return cy.get('#sign-username');
  }

  get passwordField() {
    return cy.get('#sign-password');
  }

  get confirmBtn() {
    return cy.contains('.btn', 'Sign up');
  }
}

export default SignUp;
