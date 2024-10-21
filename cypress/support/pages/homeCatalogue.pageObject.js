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

  clickOnAddToCartDtn() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }

  clickOnCart() {
    cy.get('#cartur').click();
  }
}

export default HomeAndCataloguePageObject;
