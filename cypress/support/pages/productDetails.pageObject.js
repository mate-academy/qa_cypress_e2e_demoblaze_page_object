import PageObject from '../PageObject';

class ProductDetailsPageObject extends PageObject {
  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }

  clickOnAddToCart() {
    this.addToCartBtn.click();
  }
}

export default ProductDetailsPageObject;
