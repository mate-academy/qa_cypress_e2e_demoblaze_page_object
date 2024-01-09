import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

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

  get addToCart() {
    return cy.get('[onclick="addToCart(9)"]');
  }

  clickOnAddToCartButton() {
    this.addToCart.click();
  }

  get itemId () {
    return cy.get('#tbodyid');
  }

  assertItemInCart(product) {
    this.itemId.should('contain', product);
  }

  get buttonPlaceOrder() {
    return cy.get('.btn.btn-success');
  }

  clickOnButtonPlaceOrder() {
    this.buttonPlaceOrder.click();
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }
}

export default HomeAndCataloguePageObject;
