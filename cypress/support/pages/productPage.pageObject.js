import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  setUrl(url) {
    this.url = url;
  }

  clickOnAddToCart() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }
}

export default ProductPageObject;
