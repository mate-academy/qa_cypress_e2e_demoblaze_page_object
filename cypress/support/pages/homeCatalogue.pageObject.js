class HomeAndCataloguePageObject {
  visit() {
    cy.visit('https://www.demoblaze.com/');
  }

  clickOnCategory(category) {
    cy.get('a#itemc').contains(category).click();
  }

  clickOnProduct(productName) {
    cy.get('a.hrefch').contains(productName).click();
  }

  addToCart() {
    cy.get('a.btn.btn-success.btn-lg').contains('Add to cart').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Product added');
    });
    cy.on('window:confirm', () => true);
  }

  goToCart() {
    cy.get('a#cartur').contains('Cart').click();
  }
}

export default HomeAndCataloguePageObject;
