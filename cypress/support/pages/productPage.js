class productPage {
  addToCart() {
    cy.contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
  }
}

export default new productPage();