import PageObject from '../PageObject';

class HomeCataloguePageObject extends PageObject {
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

  clickByClass(product) {
    cy.get(product)
      .click();
  }

  mustHave(clipbord, text) {
    cy.get(clipbord)
      .should('contain.text', text);
  }

  inputFilling(clipbord, text) {
    cy.get(clipbord).type(text);
  }
}
export default HomeCataloguePageObject;
