import PageObject from '../PageObject';

class ProductInfoPageObject extends PageObject {
  url = '/index.html';

  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }
}

export default ProductInfoPageObject;
