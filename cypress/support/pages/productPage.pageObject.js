import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/index.html';

  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }

  clickOnAddToCartBtn() {
    this.addToCartBtn.click();
  }
}

export default ProductPageObject;
