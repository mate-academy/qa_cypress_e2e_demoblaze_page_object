import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/index.html';

  get addToCartButton() {
    return cy.contains('.btn', 'Add to cart');
  }
}

export default ProductPageObject;
