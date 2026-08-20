import PageObject from '../PageObject';

class ProductDetailsPageObject extends PageObject {
  get addToCartBtn() {
    return cy.contains('a', 'Add to cart');
  }

  clickOnAddToCartBtn() {
    this.addToCartBtn.click();
  }
}

export default ProductDetailsPageObject;
