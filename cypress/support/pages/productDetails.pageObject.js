export default class ProductDetailsPageObject {
  verifyProductDetails(productName) {
    cy.get('.name').should('contain', productName);
  }

  clickOnAddToCartButton() {
    cy.get('.btn-success').contains('Add to cart').click();
  }

  assertAlert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }
}
