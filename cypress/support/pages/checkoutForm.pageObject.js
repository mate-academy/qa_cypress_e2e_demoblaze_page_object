import PageObject from '../PageObject';

class CheckoutFormPageObject extends PageObject {
  url = '/index.html';

  get addToCartBtn() {
    return cy.contains('.btn-success', 'Add to cart');
  }

  clickOnAddToCart() {
    this.addToCartBtn.click();
  }

  assertProductInCart(productName) {
    cy.get('#tbodyid').should('contain', 'Sony vaio i7');
  }

  get addToPlaceOrder() {
    return cy.contains('.btn-success', 'Place Order');
  }

  clickOnPlaceOrder() {
    this.addToPlaceOrder.click();
  }

  get fieldName() {
    return cy.get('#name');
  }

  get fieldCountry() {
    return cy.get('#country');
  }

  get fieldCity() {
    return cy.get('#city');
  }

  get fieldCreditCard() {
    return cy.get('#card');
  }

  get fieldMonth() {
    return cy.get('#month');
  }

  get fieldYear() {
    return cy.get('#year');
  }

  get addToPurchaseBtn() {
    return cy.contains('.btn-primary', 'Purchase');
  }

  clickOnPurchaseBtn() {
    this.addToPurchaseBtn.click();
  }

  assertEnteredDataShown (data) {
    cy.get('.sweet-alert')
      .should('contain.text', 'Thank you for your purchase!');
  }

  get okBtn() {
    return cy.get('.confirm');
  }

  clickOnOkBtn() {
    this.okBtn.click();
  }
}

export default CheckoutFormPageObject;
