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

  addToCart() {
    cy.contains('Add to cart').click();
  }

  clickOnCart() {
    cy.get('#cartur').click();
  }

  verifyProductInCart(productName) {
    cy.contains(productName).should('exist');
  }

  placeOrder() {
    cy.get('button[data-target="#orderModal"]').click();
  }

  handleAlert(expectedText) {
    cy.on('window:alert', (text) => {
      expect(text).to.contains(expectedText);
    });
  }
}

export default HomeAndCataloguePageObject;
