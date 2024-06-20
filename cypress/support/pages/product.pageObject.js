import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/index.html';

  clickOnAddToCart() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }

  getSuccessfulMessage(message) {
    // cy.wait(4000);
    cy.on('window:alert', (str) => {
      expect(str).to.equal(message);
    })
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }
}

export default ProductPageObject;
