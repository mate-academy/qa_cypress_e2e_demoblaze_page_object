import PageObject from '../PageObject';

class ProductPagePageObject extends PageObject {
  url = '/prod.html';

  addToCard() {
    cy.location('pathname')
      .should('eq', this.url);
    cy.get('a')
      .contains('Add to cart')
      .click();
  }
}

export default ProductPagePageObject;
