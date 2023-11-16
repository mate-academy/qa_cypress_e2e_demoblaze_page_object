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

  clickOnAddToCartButton() {
    cy.get('a[onclick="addToCart(9)"]').click();
    cy.on('window:confirm', (alert) => {
      expect(alert).to.equal('Product added');
    });
  }
}

export default HomeAndCataloguePageObject;
