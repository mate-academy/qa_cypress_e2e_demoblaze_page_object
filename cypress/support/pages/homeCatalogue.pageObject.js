import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = 'https://www.demoblaze.com/';
  // url = '/index.html';

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

  clickOnBtn(btnText) {
    cy.contains('.btn', btnText)
      .click();
  }
}

export default HomeAndCataloguePageObject;
