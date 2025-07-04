import PageObject from '../PageObject';

export default class HeaderPageObject extends PageObject {
  url = '/cart.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click();
  }
}
