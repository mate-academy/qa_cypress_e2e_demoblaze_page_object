import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/';

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

  clickOnAddButton(button) {
    cy.contains('.btn', button)
      .click();
  }

  assertAllertAddProduct() {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added`)
    })
  }
}

export default HomeAndCataloguePageObject;
