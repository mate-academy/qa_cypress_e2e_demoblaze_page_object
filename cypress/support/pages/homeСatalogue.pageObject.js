import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

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

  clickOnButton(buttonName) {
    cy.contains('button', buttonName).click();
  }

  clickOnUrl(urlName) {
    cy.contains('a', urlName).click();
  }
}

export default HomeAndCataloguePageObject;
