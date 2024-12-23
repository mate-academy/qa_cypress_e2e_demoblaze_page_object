import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnLinkOther(linkName) {
    cy.contains('.list-group-item', linkName)
      .click();
  }

  clickOnButton(linkName) {
    cy.contains('.confirm', linkName)
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
}

export default HomeAndCataloguePageObject;
