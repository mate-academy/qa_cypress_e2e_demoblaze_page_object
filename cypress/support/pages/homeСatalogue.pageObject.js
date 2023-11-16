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

  clickOnAddToCart() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }

  assertAddedToCart() {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added`)
    });
  } 
}

export default HomeAndCataloguePageObject;
