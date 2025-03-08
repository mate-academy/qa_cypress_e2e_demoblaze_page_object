import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/prod.html';
  addToCart() {
    cy.contains('.btn-success', 'Add to cart')
      .click();
  }
}

export default ProductPageObject;
