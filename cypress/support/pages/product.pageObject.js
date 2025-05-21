import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  clickAddToCart() {
    cy.contains('Add to cart').click();
  }

  assertAddToCartAlert() {
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Product added');
    });
  }
}

export default ProductPageObject;
