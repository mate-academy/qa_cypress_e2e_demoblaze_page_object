import PageObject from '../PageObject';

class HomeAndCatalogue extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }
  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }
  checkUrlEndPoint(urlEndpoint) {
    cy.url().should('include', urlEndpoint)
  }
  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }


}

export default HomeAndCatalogue;
