import PageObject from '../PageObject';

class SignUpPagePageObject extends PageObject {
  get usernameField() {
    return cy.get('#sign-username');
  }

  get paswordField() {
    return cy.get('#sign-password');
  }

  signUpUser(user) {
    cy.get('#sign-username').type(user.username, { force: true });
    cy.get('#sign-password').type(user.password, { force: true });
  }

  clickSignUpBtn() {
    cy.contains('.btn', 'Sign up')
      .click();
  };

  signUpSuccessMessage() {
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Sign up successful');
    });
  }
}

export default SignUpPagePageObject;
