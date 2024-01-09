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
    return cy.get('.btn.btn-success.btn-lg')
  }

  buttonAddToCart() {
    this.addToCart.click();
  }

  get placeOrder() {
    return cy.get('.btn.btn-success')
  }

  buttonPlaceOrder() {
    this.placeOrder.click();
  }

  get purchase() {
    return cy.get('[onclick="purchaseOrder()"]')
  }

  buttonPurchase() {
    this.purchase.click()
  }

  get okAfterPurchase() {
    return cy.get('.confirm')
  }

  buttonOkAfterPurchase() {
    this.okAfterPurchase.click()
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
