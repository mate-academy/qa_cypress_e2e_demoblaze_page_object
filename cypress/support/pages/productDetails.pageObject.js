import PageObject from '../PageObject';

export default class ProductDetailsPageObject extends PageObject {
  verifyProductDetails(productName) {
    cy.get('.name').should('contain', productName);
  }

  clickOnAddToCartButton() {
    cy.get('.btn-success').contains('Add to cart').click();
  }
}
