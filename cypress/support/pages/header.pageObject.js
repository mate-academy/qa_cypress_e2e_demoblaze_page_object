export default class HeaderPageObject {
  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click();
  }
}
