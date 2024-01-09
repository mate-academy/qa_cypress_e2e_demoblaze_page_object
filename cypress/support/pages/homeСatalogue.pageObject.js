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

  get addToCartBtn() {
    return cy.get('.btn.btn-success.btn-lg')
  }

  clickOnAddToCartBtn() {
    this.addToCartBtn.click();
  }

  get placeOrderBtn() {
    return cy.get('.btn.btn-success')
  }

  clickOnPlaceOrderBtn() {
    this.placeOrderBtn.click();
  }

  get purchaseBtn() {
    return cy.get('[onclick="purchaseOrder()"]')
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click()
  }

  get okAfterPurchaseBtn() {
    return cy.get('.confirm')
  }

  clickOnOkAfterPurchaseBtn() {
    this.okAfterPurchaseBtn.click()
  }
  
  get productInCart() {
    return cy.get('td')
  }

  assertProductInCart(product) {
    this.productInCart.should('contain', product);
  }

  getById(id, fieldName) {
    cy.get(`[id="${id}"]`).type(fieldName);
  }

  get dataAfterPurchase() {
    return cy.get('.sweet-alert')
  }

  assertDataAfterPurchase(dataAboutUser) {
    this.dataAfterPurchase.should('contain', dataAboutUser)
  }
}

export default HomeAndCataloguePageObject;
