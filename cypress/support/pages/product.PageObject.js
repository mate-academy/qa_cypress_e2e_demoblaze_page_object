import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  clickOnAddBtn() {
    cy.contains('a', 'Add to cart')
      .click();
  }

  assertAlert(alertMessage) {
    cy.on('window:alert', (str) => {
      expect(str).to.contains(alertMessage);
    });
  }
};

export default ProductPageObject;
