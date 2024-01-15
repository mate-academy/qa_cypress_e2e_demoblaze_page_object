import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/prod.html';

  clickOnAddToCartButton() {
    cy.contains('.btn', 'Add to cart').click();
  }
}

export default ProductPageObject;
