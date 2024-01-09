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

  findFieldById(id, fieldName) {
    cy.get(`[id=${id}]`)
      .type(fieldName);
  }

  get purchaseButton() {
    return cy.get('[onclick="purchaseOrder()"]');
  }

  clickOnPurchaseButton() {
    this.purchaseButton.click();
  }

  get allertAfterPurchase() {
    return cy.get('.sweet-alert');
  }

  assertDataAfterPurchase(data) {
    this.allertAfterPurchase.should('contain', data);
  }

  get okButton () {
    return cy.get('.confirm.btn.btn-lg.btn-primary');
  }

  clickOnOkAfterPurchase() {
    this.okButton.click();
  }
}

export default HomeAndCataloguePageObject;
