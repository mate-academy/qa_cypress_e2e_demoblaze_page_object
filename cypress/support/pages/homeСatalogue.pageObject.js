import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = 'https://www.demoblaze.com/';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }

  clickOnAddToCartBtn(btnName) {
    cy.contains('.btn', btnName)
      .click();
  }

  clickOnSignUpBtn() {
    cy.contains('#signin2', 'Sign up')
      .click();
  }

  clickOnLogInBtn() {
    cy.contains('#login2', 'Log in')
      .click();
  }

  typeSignInName(userName) {
    cy.get('#sign-username').type(userName);
  }

  typeSignInPassword(userPassword) {
    cy.get('#sign-password').type(userPassword);
  }

  clickOnSignUpAcceptBtn() {
    cy.contains('.btn', 'Sign up')
      .click();
  }

  typeLoginName(userName) {
    cy.get('#loginusername').type(userName);
  }

  typeLoginPassword(userPassword) {
    cy.get('#loginpassword').type(userPassword);
  }

  clickOnLogInAcceptBtn() {
    cy.contains('.btn', 'Log in')
      .click();
  }

  assertUsername(userName) {
    cy.get('#nameofuser').should('contain', `Welcome ${userName}`);
  }
}

export default HomeAndCataloguePageObject;
