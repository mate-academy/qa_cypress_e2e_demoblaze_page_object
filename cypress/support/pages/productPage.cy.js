/// <reference types="cypress" />

class ProductPage {
  clickOnProduct(productName) {
    cy.contains(productName).click();
  }

  clickAddToCart() {
    cy.contains('Add to cart').click();
  }

  verifyAlert() {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
  }
}

export default ProductPage;
