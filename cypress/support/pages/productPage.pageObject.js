import PageObject from '../PageObject';

class ProductPagePageObject extends PageObject {
  clickOnAddToCart() {
    cy.get('a.btn')
      .should('contain', 'Add to cart')
      .click();
  }
}

export default ProductPagePageObject;
