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

  clickOnButton(button) {
    cy.contains('.btn', button)
      .click();
  }

  clickOnButtonModal(buttonModal) {
    cy.contains('.confirm', buttonModal)
      .click();
  }

  fillTheField(attribute, fieldName) {
    cy.get(`#${attribute}`)
      .type(fieldName);
  }
}

export default HomeAndCataloguePageObject;
