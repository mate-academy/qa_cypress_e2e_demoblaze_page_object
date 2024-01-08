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

  buttonAddToCart() {
    cy.get('.btn.btn-success.btn-lg').click();
  }

  buttonPlaceOrder() {
    cy.get('.btn.btn-success').click();
  }

  buttonPurchase() {
    cy.get('[onclick="purchaseOrder()"]').click()
  }

  buttonOkAfterPurchase() {
    cy.get('.confirm').click()
  }

  assertProductInCart(product) {
    cy.get('td').should('contain', product);
  }

  getById(id, fieldName) {
    cy.get(`[id="${id}"]`).type(fieldName);
  }

  assertDataAfterPurchase(dataAboutUser) {
    cy.get('.sweet-alert').should('contain', dataAboutUser)
  }
}

export default HomeAndCataloguePageObject;
