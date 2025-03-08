import PageObject from '../PageObject';

class ProductDetailPage extends PageObject {
  get addToCart() {
    return cy.contains('a', 'Add to cart');
  }

  clickAddToCart() {
    this.addToCart.click();
  }
}

export default ProductDetailPage;
