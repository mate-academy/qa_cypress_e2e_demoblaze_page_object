import PageObject from './pageObject';

class ProductPage extends PageObject {
  addToCart() {
    cy.contains('Add to cart').click();
  }

  selectProduct(productName) {
    cy.contains(productName).click();
  }
}

export default ProductPage;
