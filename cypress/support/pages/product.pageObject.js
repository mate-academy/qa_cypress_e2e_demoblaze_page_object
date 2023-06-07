import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  clickOnAddBtn() {
    cy.contains('.btn', 'Add to cart').click();
  }

  assertAllert(assertText) {
    cy.on('window:alert', (t) => {
      expect(t).to.contains(assertText);
    });
  }
}

export default ProductPageObject;
