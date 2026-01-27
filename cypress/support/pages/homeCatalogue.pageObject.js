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

  addToCartProductByClick(product) {
    cy.location('pathname')
      .should('eq', this.url);

    this.clickOnProduct(product);
    cy.get('a')
      .contains('Add to cart')
      .click();
  }

  navigateByClick(linkName) {
    cy.get('a')
      .contains(linkName)
      .click();
  }
}

export default HomeAndCataloguePageObject;
