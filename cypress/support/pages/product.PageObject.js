import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  clickOnAddBtn() {
    cy.contains('.btn', 'Add to cart').click();
  }

  assertAllert() {
    cy.on('window:alert', (str) => {
      expect(str).to.contains('Product added');
    });
  }
}

export default ProductPageObject;
