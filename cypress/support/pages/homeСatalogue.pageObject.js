import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }

  addToCart() {
    cy.contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
  }

  clickOnCart() {
    cy.contains('Cart').click();
  }
}

export default HomeAndCataloguePageObject;
