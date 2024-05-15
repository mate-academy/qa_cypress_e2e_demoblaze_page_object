import PageObject from '../PageObject';

class ProductPagePageObject extends PageObject {
  url = '/prod.html';

  clickOnAddToCartButton() {
    cy.contains('.btn.btn-success.btn-lg', 'Add to cart').as('alert').click();
  }
}

export default ProductPagePageObject;
