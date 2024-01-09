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

  clickOnAddToCartButton() {
    cy.get('[onclick="addToCart(9)"]')
      .click();
  }

  assertItemInCart(product) {
    cy.get('#tbodyid').should('contain', product);
  }

  clickOnButtonPlaceOrder() {
    cy.get('.btn.btn-success')
      .click();
  }

  findFieldById(id, fieldName) { 
    cy.get(`[id=${id}]`)
      .type(fieldName);
  }

  clickOnPurchase() {
    cy.get('[onclick="purchaseOrder()"]')
      .click();
  }

  assertDataAfterPurchase(data) {
    cy.get('.sweet-alert').should('contain', data);
  }

  clickOnOkAfterPurchase() {
    cy.get('.confirm.btn.btn-lg.btn-primary').click();
  }
}
export default HomeAndCataloguePageObject;
