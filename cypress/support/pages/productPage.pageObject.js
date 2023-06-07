import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  clickOnAddToCartBtn() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }
}

export default ProductPageObject;
