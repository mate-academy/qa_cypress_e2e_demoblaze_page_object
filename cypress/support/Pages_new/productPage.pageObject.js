class ProductPage {
  clickAddToCartButton() {
    cy.get('.btn').contains('Add to cart').click();
  }

  clickCartLink() {
    cy.get('#cartur').click();
  }

  assertAlert(alertMessage) {
    cy.wait(1000);
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }
}

export const productPage = new ProductPage();
