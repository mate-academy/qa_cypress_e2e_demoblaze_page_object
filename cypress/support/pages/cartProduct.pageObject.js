import PageObject from '../PageObject';

class CartProductObject extends PageObject {
  url = '/cart.html';

  clickOnButton(button) {
    cy.contains('.btn', button)
      .click();
  }

  userName(name) {
    cy.get('#name')
      .type(name);
  }

  userCountry(country) {
    cy.get('#country')
      .type(country);
  }

  userCity(city) {
    cy.get('#city')
      .type(city);
  }

  userCard(card) {
    cy.get('#card')
      .type(card);
  }

  userMonth(month) {
    cy.get('#month')
      .type(month);
  }

  userYear(year) {
    cy.get('#year')
      .type(year);
  }

  confirmButton(confirm) {
    cy.contains('.confirm', confirm)
      .click();
  }

  get selectedItem() {
    return cy.get('.table-responsive');
  }

  assertItemInTheCart() {
    this.selectedItem.should('contain', 'Sony vaio i7');
  }

  purchaseDone(alertMessage) {
    cy.get('.sweet-alert').should('contain', alertMessage);
  }

  get makePurchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnaddToCartBtn() {
    this.addToCartBtn.click();
  }

  clickOnmakePurchaseBtn() {
    this.makePurchaseBtn.click();
  }

  clickOnplaceOrderBtn() {
    this.placeOrderBtn.click();
  }

  
}

export default CartProductObject;