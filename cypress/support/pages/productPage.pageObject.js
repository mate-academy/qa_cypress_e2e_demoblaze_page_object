import PageObject from '../PageObject';

class ProductPagePageObject extends PageObject {
  url = '/index.html';

  clickOnAddToCartButton() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }

  assertProductAdded() {
    cy.wait(1000);
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added');
    });
  }
}
export default ProductPagePageObject;
