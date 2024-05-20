import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = 'https://www.demoblaze.com/';

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

  clickOnAddToCartBtn() {
    cy.get('[onclick="addToCart(9)"]')
      .click();
  }
}

export default HomeAndCataloguePageObject;
