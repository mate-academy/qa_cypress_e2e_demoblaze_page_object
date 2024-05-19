class AddProduct {
  addProduct () {
    cy.get('.btn').contains('Add to cart').click();

    cy.on('window:alert', (alert) => {
      expect(alert).to.equal('Product added');
    });
  }

  goToCart() {
    cy.get('a').contains('Cart').click();
  }

  assertProduct(productName) {
    cy.get('#tbodyid').should('contain', productName);
  }
};

export const addedProduct = new AddProduct();
