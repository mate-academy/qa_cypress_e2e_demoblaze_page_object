import PageObject from '../PageObject';
/// <reference types='cypress' />

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }

  clickOnAddToCart() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }
}

export default HomeAndCataloguePageObject;
