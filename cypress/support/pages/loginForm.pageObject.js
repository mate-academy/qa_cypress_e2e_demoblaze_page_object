import PageObject from '../PageObject';

class LogIn extends PageObject {
  get usernameField() {
    return cy.get('#loginusername');
  }

  get passwordField() {
    return cy.get('#loginpassword');
  }

  get confirmBtn() {
    return cy.contains('.btn', 'Log in');
  }

  confirmation(username) {
    cy.get('#nameofuser').should('contain', username);
  }
}

export default LogIn;
