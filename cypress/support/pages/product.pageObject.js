/// <reference types="Cypress" />

import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  selectProduct(productName) {
    cy.contains('.hrefch', productName)
      .click();
  }

  clickAddToCart() {
    cy.contains('a', 'Add to cart')
      .click();
  }
}

export default ProductPageObject;