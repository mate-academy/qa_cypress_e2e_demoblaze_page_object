import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }

  clickOnButton(buttonText) {
    cy.contains(buttonText).click();
  }

  verifyAlertMessage(expectedMessage) {
    cy.on('window:alert', (text) => {
      expect(text).to.include(expectedMessage);
    });
  }
}

export default HomeAndCataloguePageObject;
