export default class CartPage {
  clickOnCart() {
    cy.contains('a', 'Cart').click();
  }

  assertProductInCart(productName) {
    cy.contains('td', productName).should('be.visible');
  }

  clickOnPlaceOrder() {
    cy.contains('button', 'Place Order').click();
  }
}
