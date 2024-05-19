class ProductPage {
  clickAddToCart() {
    cy.get('.btn').contains('Add to cart').click();
  }

  assertMassage() {
    cy.on('window:alert', (alert) => {
      expect(alert).to.equal('Product added');
    });
  }

  clickOnCartLink() {
    cy.get('a').contains('Cart').click();
  }
}

export const productPage = new ProductPage();
