import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
visit() {
    cy.visit('https://www.demoblaze.com/');
}
  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
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