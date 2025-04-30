import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  getInputField(elementId) {
    return cy.get(`#${elementId}`);
  }

  typeInputField(elementId, data) {
    this.getInputField(elementId).type(data);
  }

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

  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName).should('be.visible').click();
  }
}

export default HomeAndCataloguePageObject;
