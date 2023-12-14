import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  addToCart() {
    cy.contains('a', 'Add to cart')
      .click();
  }
}

export default ProductPageObject;
