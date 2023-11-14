import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnCartLink() {
    cy.contains('.nav-link', 'Cart')
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

  clickOnNotebookCategory() {
    cy.get(`[onclick="byCat('notebook')"]`)
      .click();
  };

  clickOnSonyVaioI7() {
    cy.contains('.hrefch', 'Sony vaio i7')
      .click();
  };

  clickAddToCartButton() {
    cy.get(`[onclick="addToCart(9)"]`)
      .click();
  };

  assertAddingProductToCartAlert() {
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Product added');
    });
  };
}

export default HomeAndCataloguePageObject;
