import PageObject from '../PageObject';

class CheckoutPageObject extends PageObject {
  get addToCartButton() {
    return cy.contains('a', 'Add to cart');
  }

  get cartLink() {
    return cy.get('#cartur');
  }

  get cartProducts() {
    return cy.get('#tbodyid');
  }

  get placeOrderButton() {
    return cy.contains('button', 'Place Order');
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

  get creditCardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  get purchaseButton() {
    return cy.contains('#orderModal button', 'Purchase');
  }

  get confirmationModal() {
    return cy.get('.sweet-alert');
  }

  get confirmationButton() {
    return cy.contains('.sweet-alert button', 'OK');
  }

  clickOnAddToCart() {
    this.addToCartButton.should('be.visible').click();
  }

  clickOnCart() {
    this.cartLink.click();
  }

  clickOnPlaceOrder() {
    this.placeOrderButton.click();
  }

  fillOrderForm(data) {
    this.nameField.type(data.name);
    this.countryField.type(data.country);
    this.cityField.type(data.city);
    this.creditCardField.type(data.card);
    this.monthField.type(data.month);
    this.yearField.type(data.year);
  }

  clickOnPurchase() {
    this.purchaseButton.should('be.visible').click();
  }

  assertProductInCart(productName) {
    this.cartProducts.should('contain', productName);
  }

  assertPurchaseData(data) {
    this.confirmationModal
      .should('be.visible')
      .and('contain', `Card Number: ${data.card}`)
      .and('contain', `Name: ${data.name}`);
  }

  clickOnConfirmationButton() {
    this.confirmationButton.click();
  }
}

export default CheckoutPageObject;
