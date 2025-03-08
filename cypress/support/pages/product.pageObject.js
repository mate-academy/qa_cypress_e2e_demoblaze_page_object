/// <reference types="Cypress" />

import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  clickAddToCart() {
    cy.get('[onclick="addToCart(9)"]')
      .click();
  }
}

export default ProductPageObject;
