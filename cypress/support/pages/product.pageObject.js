import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  addToCartBtn() {
    cy.contains('.btn', 'Add to cart').click();
  }

  allertMessage(message) {
    cy.on('window:alert', (str) => {
      expect(str).to.contains(message);
    });
  }
};

export default ProductPageObject;
