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

  addToCartBtn() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }

  placeOrderBtn() {
    cy.contains('.btn', 'Place Order')
      .click();
  }
  
}

export default HomeAndCataloguePageObject;
