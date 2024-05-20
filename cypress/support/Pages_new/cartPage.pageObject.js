class CartPage {
  clickToCartLink() {
    cy.get('a').contains('Cart').click();
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq('Product Added');
    });
  }

  assertProductExistsInTheCart(productName) {
    cy.get('#tbodyid').should('contain', productName);
  }
}

export const cartPage = new CartPage();
