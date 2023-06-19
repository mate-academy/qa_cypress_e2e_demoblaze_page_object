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

  addProductToTheCart(button) {
    cy.contains('.btn-success', button)
      .click();
  }
  assertAddedProduct() {
    cy.on('window:alert', (str) => {
      expect(str).to.eq('Product added');
    });
    }
  
}

export default HomeAndCataloguePageObject;
