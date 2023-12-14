import PageObject from '../PageObject';

class ProductPage extends PageObject {
  url = '/index.html';

  addToCart() {
    cy.get('.btn').contains('Add to cart').click();
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }
}

export default ProductPage;
