import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  addToCart() {
    cy.contains('.btn', 'Add to cart').click();
  }

  confirmAlert(message) {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(message);
    });
  }
}

export default ProductPageObject;
