import PageObject from '../PageObject';

class ProductPage extends PageObject {
  url = '/index.html';

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }

  addToCart() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }

  assertAddToCartAlert() {
    cy.on('window:alert', (str) => {
      expect(str).to.eq('Product added');
    });
  }
}

export default ProductPage;
