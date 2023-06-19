import PageObject from '../PageObject';

class ProductPagePageObject extends PageObject {
  url = '/index.html';

  productAssert(productName) {
    cy.contains('h2', productName)
      .should('exist');
  }

  get addToCartButton() {
    return cy.contains('.btn', 'Add to cart');
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }
}

export default ProductPagePageObject;
