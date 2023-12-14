import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName).click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product).click();
  }

  visitHomePage() {
    cy.visit('https://www.demoblaze.com/');
  }

  clickLaptops() {
    cy.contains('Laptops').click();
  }
}

export default HomeAndCataloguePageObject;
