import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }

  clickOnButton(button) {
    cy.contains('.btn', button)
      .click();
  }

  assertAlertMessage(name) {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
  }
};

export default ProductPageObject;
