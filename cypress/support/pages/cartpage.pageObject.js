import PageObject from '../PageObject';

class cartPageObject extends PageObject {
  url = '/cart.html';

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  get nameField() {
    return cy.get('#name');
  }

  get countryField() {
    return cy.get('#country');
  }

  get cityField() {
    return cy.get('#city');
  }

  get cardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }
  
  get yearField() {
    return cy.get('#year');
  }

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get alertMessage() {
    return cy.get('.sweet-alert');
  }

  get okConfirmBtn() {
    return cy.contains('.btn', 'OK');
  }

  clickOnplaceOrderBtn() {
    this.placeOrderBtn.click();
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  clickOnokConfirmBtn() {
    this.okConfirmBtn.click();
  }
}

export default cartPageObject;
