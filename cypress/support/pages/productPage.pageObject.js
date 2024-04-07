import PageObject from '../PageObject';

class ProductPagePageObject extends PageObject {
  clickOnAddToCart() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }
}

export default ProductPagePageObject;
