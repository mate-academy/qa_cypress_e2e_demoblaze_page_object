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

  assertProductInCart(productName) {
    cy.contains('.success', productName)
      .should('exist');
  }

  clickPlaceOrder() {
    cy.contains('button', 'Place Order')
      .click();
  }
}

export default HomeAndCataloguePageObject;