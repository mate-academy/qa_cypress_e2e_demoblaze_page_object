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

  clickAddToCartBtn() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }

  assertAddedproduct() {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added.');
    });
  }

  clickACart() {
    cy.get('#cartur').click();
  }
}

export default HomeAndCataloguePageObject;
