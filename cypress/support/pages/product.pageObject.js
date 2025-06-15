class ProductPageObject {
  clickAddToCart() {
    cy.contains('Add to cart').click();
  }

  verifyAlertMessage(expectedMessage) {
    cy.on('window:alert', (str) => {
      expect(str).to.contain(expectedMessage);
    });
  }
}

export default ProductPageObject;
