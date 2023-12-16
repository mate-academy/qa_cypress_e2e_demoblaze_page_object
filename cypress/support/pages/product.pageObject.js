import PageObject from '../PageObject';

/// <reference types='Cypress' />

class ProductPageObject extends PageObject {
  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName)
      .click();
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }
}

export default ProductPageObject;
