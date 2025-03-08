import PageObject from '../PageObject';

class ProductDetailPageObject extends PageObject {
  get addToCart() {
    return cy.get('a').contains('Add to cart').click();
  }
}

export default ProductDetailPageObject;
