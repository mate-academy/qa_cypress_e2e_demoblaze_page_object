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
    cy.contains('a', 'Add to cart')
      .click();
  }
  get modal () {
    return (cy.on('window:alert', (alert) => {
      expect(alert).to.equal('Product added');
    }));
  }
  assertModalIsVisible() {
    this.modal.should('be.visible')
  }
  clickOnCart() {
    cy.contains('a', 'Cart').click();
  }
}

export default HomeAndCataloguePageObject;
