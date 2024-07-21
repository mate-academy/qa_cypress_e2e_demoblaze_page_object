import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  constructor() {
    super();

    this.url = '/index.html';
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(productName) {
    cy.contains('.hrefch', productName)
      .click();
  }

  clickOnAddToCartBtn() {
    cy.contains('[onclick="addToCart(9)"]', 'Add to cart')
      .click();

    cy.intercept('POST', '/addtocart').as('addToCart');
    cy.wait('@addToCart');
  }
}

export default HomeAndCataloguePageObject;
