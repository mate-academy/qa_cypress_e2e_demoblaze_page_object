/// <reference types='cypress' />

import PageObject from '../PageObject.js';
export default class ProductPageObjects extends PageObject {
  productAddedAlert = 'Product added';

  get addToCartBtn() {
    return cy.contains('Add to cart');
  }

  addProductToCart() {
    this.addToCartBtn.click();
  }
}
