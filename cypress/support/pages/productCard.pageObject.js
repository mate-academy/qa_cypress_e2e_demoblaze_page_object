import PageObject from '../PageObject';

class ProductCardPageObject extends PageObject {
  assertAllert(assertText) {
    cy.on('window:alert', (t) => {
      expect(t).to.contains(assertText);
    });
  }
}

export default ProductCardPageObject;
