import PageObject from '../PageObject';

class LogInPagePageObject extends PageObject {
  get usernameField() {
    return cy.get('#sign-username');
  }

  get paswordField() {
    return cy.get('#sign-password');
  }

  logInUser(user) {
    cy.get('#loginusername').type(user.username, { force: true });
    cy.get('#loginpassword').type(user.password, { force: true });
  }

  clickLogInBtn() {
    cy.contains('.btn', 'Log in')
      .click();
  };
}
export default LogInPagePageObject;
