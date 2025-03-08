import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/prod.html';

  addToCart() {
    cy.contains('.btn', 'Add to cart').click();
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click();
  }
}

export default ProductPageObject;
