import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  constructor() {
    super('/index.html');
  }

  visit() {
    cy.visit('https://www.demoblaze.com'); // or your app's base URL
  }

  navigateToCart() {
    cy.contains('.nav-link', 'Cart').click();
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName).click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product).click();
  }
}

export default HomeAndCataloguePageObject;
