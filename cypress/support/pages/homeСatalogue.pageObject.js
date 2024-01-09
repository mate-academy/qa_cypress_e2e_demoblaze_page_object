import PageObject from '../PageObject';
class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';
  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnButton1(buttonName) {
    cy.contains('.col-sm-12', buttonName)
      .click();
  }

  clickOnButton2(buttonName) {
    cy.contains('.btn-success', buttonName)
      .click();
  }

  clickOnButton3(buttonName) {
    cy.contains('.btn-primary', buttonName)
      .click();
  }

   clickOnButton4(buttonName) {
    cy.contains('.btn', buttonName)
      .click();

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }
  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }
}
export default HomeAndCataloguePageObject;
