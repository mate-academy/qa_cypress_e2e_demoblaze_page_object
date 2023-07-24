import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  addToCartBtn() {
    cy.contains('.btn', 'Add to cart').click();
  }

  allertMessage() {
    cy.on('window:alert', (str) => {
      expect(str).to.contains('Product added');
    });
  }
}

export default ProductPageObject;