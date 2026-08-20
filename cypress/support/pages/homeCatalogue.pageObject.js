import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  visit() {
    cy.visit(this.url);
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(productName) {
    cy.contains('.hrefch', productName)
      .click();
  }
}

export default HomeAndCataloguePageObject;
