import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  get cardBtn() {
    return cy.get('#cartur');
  }

  clickOnBtn(btnName) {
    cy.contains('.btn', btnName)
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
