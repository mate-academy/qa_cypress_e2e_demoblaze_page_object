import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/prod.html';
  clickOnAddToCartButton() {
    cy.get('.btn').contains('Add to cart').click();
  }
}
export default ProductPageObject;
