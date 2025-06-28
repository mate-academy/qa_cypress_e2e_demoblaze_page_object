import PageObject from '../PageObject';

export class ProductPageObject extends PageObject {
  url = '/prod.html';

  addToCart() {
    return cy.contains('a', 'Add to cart').click();
  }
}
