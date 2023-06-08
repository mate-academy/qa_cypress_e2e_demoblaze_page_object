import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  clickOnAddBtn() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }

  assertAllert(assertText) {
    cy.on('window:alert', (text) => {
      expect(text).to.contains(assertText);
    });
  }
}

export default ProductPageObject;