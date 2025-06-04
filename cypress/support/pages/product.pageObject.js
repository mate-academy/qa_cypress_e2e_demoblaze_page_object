import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  selectProduct(productName) {
    cy.contains('.hrefch', productName).click();
  }

  addToCart() {
    cy.contains('Add to cart').click();
  }
}

export default ProductPageObject;
