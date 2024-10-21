import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  get addToCartButton() {
    return cy.contains('Add to cart');
  }

  clickAddToCart() {
    this.addToCartButton.click();
  }

  assertAlert(expectedMessage) {
    cy.on('window:alert', (text) => {
      expect(text).to.contains(expectedMessage);
    });
  }
}

export default ProductPageObject;