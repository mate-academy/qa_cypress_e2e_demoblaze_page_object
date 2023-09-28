class ProductPage {
  addToCart() {
    cy.contains('Add to cart').click();
    cy.on('window:alert', (alert) => {
      expect(alert).to.equal('Product added');
    });
  }
}

export default new ProductPage();
