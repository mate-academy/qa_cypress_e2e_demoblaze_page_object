import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }

  selectProduct(productName) {
    cy.contains('.hrefch', productName).click();
  }

  clickAddToCart() {
    this.addToCartBtn.click();
  }
}

export default ProductPageObject;
