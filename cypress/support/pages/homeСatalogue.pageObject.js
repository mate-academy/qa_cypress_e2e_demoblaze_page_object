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
  get laptopLink() {
    return cy.contains('Laptops').click()
  }
  get addToCartBtn() {
    return cy.get('.btn-success').click()
  }

}

export default HomeAndCataloguePageObject;
