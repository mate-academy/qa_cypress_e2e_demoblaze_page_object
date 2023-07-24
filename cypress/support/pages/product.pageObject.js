import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/index.html';

  clickOnAddToCartBtn(buttonName) {
    cy.contains('.btn', buttonName)
      .click();
  }

  assertAlert(alertText) {
    cy.on('window:alert', (text) => {
      expect(text).to.equal(alertText);
    });
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }
}

export default ProductPageObject;
