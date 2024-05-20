class ProductPage {
  clickAddToCartButton () {
    cy.get('.btn').contains('Add to cart').click();

    cy.on('window:alert', (alert) => {
      expect(alert).to.equal('Product added');
    });
  }
};

export const productPage = new ProductPage();
